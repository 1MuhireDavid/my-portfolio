"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// Evenly-spaced points on a sphere (golden-angle spiral) — used to lay out
// the satellite nodes so they read as a deliberate network, not a random cloud.
const fibonacciSpherePoints = (count: number, radius: number) => {
  const points: THREE.Vector3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const ringRadius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    points.push(
      new THREE.Vector3(
        Math.cos(theta) * ringRadius * radius,
        y * radius,
        Math.sin(theta) * ringRadius * radius
      )
    );
  }
  return points;
};

const Hero3DScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 4.6);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const pointLight1 = new THREE.PointLight(0xf472b6, 40);
    pointLight1.position.set(3, 3, 3);
    const pointLight2 = new THREE.PointLight(0xa855f7, 20);
    pointLight2.position.set(-3, -2, -2);
    scene.add(ambientLight, pointLight1, pointLight2);

    const network = new THREE.Group();
    scene.add(network);

    const disposables: Array<{ dispose: () => void }> = [];

    // --- Hub node: the "you" at the center connecting everything ---
    const hubGeometry = new THREE.IcosahedronGeometry(0.34, 2);
    const hubMaterial = new THREE.MeshStandardMaterial({
      color: 0xc026d3,
      emissive: 0x7e22ce,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.5,
    });
    const hub = new THREE.Mesh(hubGeometry, hubMaterial);
    network.add(hub);
    disposables.push(hubGeometry, hubMaterial);

    // --- Satellite nodes: distinct domains (frontend/backend/db/cloud/etc.) ---
    const SATELLITE_COUNT = 9;
    const SATELLITE_RADIUS = 1.7;
    const satellitePositions = fibonacciSpherePoints(
      SATELLITE_COUNT,
      SATELLITE_RADIUS
    );
    const satelliteMeshes: THREE.Mesh[] = [];
    const satellitePhases: number[] = [];

    const purple = new THREE.Color(0xa855f7);
    const pink = new THREE.Color(0xf472b6);

    satellitePositions.forEach((pos, i) => {
      const nodeGeometry = new THREE.IcosahedronGeometry(0.12, 1);
      const nodeColor = purple.clone().lerp(pink, i / (SATELLITE_COUNT - 1));
      const nodeMaterial = new THREE.MeshStandardMaterial({
        color: nodeColor,
        emissive: nodeColor,
        emissiveIntensity: 0.5,
        roughness: 0.25,
        metalness: 0.4,
      });
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.copy(pos);
      network.add(node);
      satelliteMeshes.push(node);
      satellitePhases.push(i * 1.3);
      disposables.push(nodeGeometry, nodeMaterial);
    });

    // --- Edges: hub spokes + nearest-neighbor links, so it reads as a graph ---
    type Edge = { a: THREE.Vector3; b: THREE.Vector3 };
    const edges: Edge[] = satellitePositions.map((pos) => ({
      a: new THREE.Vector3(0, 0, 0),
      b: pos,
    }));

    const seenPairs = new Set<string>();
    satellitePositions.forEach((pos, i) => {
      let nearestIndex = -1;
      let nearestDist = Infinity;
      satellitePositions.forEach((other, j) => {
        if (i === j) return;
        const dist = pos.distanceTo(other);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearestIndex = j;
        }
      });
      const key = [i, nearestIndex].sort().join("-");
      if (nearestIndex !== -1 && !seenPairs.has(key)) {
        seenPairs.add(key);
        edges.push({ a: pos, b: satellitePositions[nearestIndex] });
      }
    });

    edges.forEach((edge, i) => {
      const isSpoke = i < SATELLITE_COUNT;
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        edge.a,
        edge.b,
      ]);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: isSpoke ? 0xc4b5fd : 0xf9a8d4,
        transparent: true,
        opacity: isSpoke ? 0.35 : 0.2,
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      network.add(line);
      disposables.push(lineGeometry, lineMaterial);
    });

    // --- Data packets: small pulses traveling along a subset of edges ---
    const PACKET_EDGE_STRIDE = 2;
    const packetGeometry = new THREE.SphereGeometry(0.045, 8, 8);
    const packetMaterial = new THREE.MeshBasicMaterial({ color: 0xfdf4ff });
    disposables.push(packetGeometry, packetMaterial);

    const packets = edges
      .filter((_, i) => i % PACKET_EDGE_STRIDE === 0)
      .map((edge, i) => {
        const mesh = new THREE.Mesh(packetGeometry, packetMaterial);
        network.add(mesh);
        return {
          mesh,
          edge,
          phase: i * 0.6,
          speed: 0.35 + (i % 3) * 0.08,
        };
      });

    // --- Sparkle particle field for depth ---
    const particleCount = 50;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 6;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xe9d5ff,
      size: 0.035,
      transparent: true,
      opacity: 0.7,
    });
    const particles = reducedMotion
      ? null
      : new THREE.Points(particleGeometry, particleMaterial);
    if (particles) scene.add(particles);
    disposables.push(particleGeometry, particleMaterial);

    const pointer = { x: 0, y: 0 };
    const handlePointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
    };
    window.addEventListener("pointermove", handlePointerMove);

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      if (!clientWidth || !clientHeight) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    let frameId: number;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000;

      if (!reducedMotion) {
        satelliteMeshes.forEach((node, i) => {
          const pulse = 1 + 0.18 * Math.sin(elapsed * 1.4 + satellitePhases[i]);
          node.scale.setScalar(pulse);
        });
        hub.scale.setScalar(1 + 0.06 * Math.sin(elapsed * 1.1));

        packets.forEach((packet) => {
          const t = (elapsed * packet.speed + packet.phase) % 1;
          const triangle = 1 - Math.abs(2 * t - 1);
          packet.mesh.position.lerpVectors(packet.edge.a, packet.edge.b, triangle);
        });

        network.rotation.y += 0.0022;
        network.rotation.x += 0.0007;
        if (particles) particles.rotation.y -= 0.0006;
      }

      const targetX = pointer.y * 0.25;
      const targetY = pointer.x * 0.25;
      network.rotation.x += (targetX - network.rotation.x) * 0.03;
      network.rotation.y += (targetY - network.rotation.y) * 0.03;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      disposables.forEach((item) => item.dispose());
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default Hero3DScene;
