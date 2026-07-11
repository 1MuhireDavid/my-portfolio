"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

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
    camera.position.set(0, 0, 4.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const pointLight1 = new THREE.PointLight(0xf472b6, 40);
    pointLight1.position.set(3, 3, 3);
    const pointLight2 = new THREE.PointLight(0xa855f7, 20);
    pointLight2.position.set(-3, -2, -2);
    scene.add(ambientLight, pointLight1, pointLight2);

    const geometry = new THREE.IcosahedronGeometry(1.6, 4);
    const positionAttr = geometry.attributes.position;
    const basePositions = positionAttr.array.slice();
    const vertexCount = positionAttr.count;
    // Phase derived from position (not random) so neighboring vertices move
    // in sync, producing a smooth blob wobble instead of chaotic spikes.
    const phases = new Float32Array(vertexCount);
    for (let i = 0; i < vertexCount; i++) {
      const ix = i * 3;
      phases[i] =
        basePositions[ix] * 2.2 +
        basePositions[ix + 1] * 2.2 +
        basePositions[ix + 2] * 2.2;
    }

    const material = new THREE.MeshStandardMaterial({
      color: 0xc026d3,
      emissive: 0x7e22ce,
      emissiveIntensity: 0.25,
      roughness: 0.15,
      metalness: 0.6,
      flatShading: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Sparkle particle field for depth
    const particleCount = 60;
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
      size: 0.04,
      transparent: true,
      opacity: 0.8,
    });
    const particles = reducedMotion
      ? null
      : new THREE.Points(particleGeometry, particleMaterial);
    if (particles) scene.add(particles);

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
        const posArray = positionAttr.array as Float32Array;
        for (let i = 0; i < vertexCount; i++) {
          const ix = i * 3;
          const nx = basePositions[ix];
          const ny = basePositions[ix + 1];
          const nz = basePositions[ix + 2];
          const displacement = 1 + 0.08 * Math.sin(elapsed * 1.2 + phases[i]);
          posArray[ix] = nx * displacement;
          posArray[ix + 1] = ny * displacement;
          posArray[ix + 2] = nz * displacement;
        }
        positionAttr.needsUpdate = true;
        geometry.computeVertexNormals();

        mesh.rotation.y += 0.0035;
        mesh.rotation.x += 0.0012;
        if (particles) particles.rotation.y -= 0.0008;
      }

      const targetX = pointer.y * 0.3;
      const targetY = pointer.x * 0.3;
      mesh.rotation.x += (targetX - mesh.rotation.x) * 0.03;
      mesh.rotation.y += (targetY - mesh.rotation.y) * 0.03;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default Hero3DScene;
