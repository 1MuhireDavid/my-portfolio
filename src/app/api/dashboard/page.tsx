"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name || "User"}!</h1>
      <p>Your email: {session.user?.email}</p>
    </div>
  );
};

export default Dashboard;
