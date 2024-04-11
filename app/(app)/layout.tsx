import { currentUser } from "@clerk/nextjs";
import React from "react";

async function AppLayout({ children }: { children: React.ReactNode }) {
  const allowedUsers = [
    "user_2THSE0pWGTgok17uIAJVFEmftIW",
    "user_2WvNOv4LPsaJoqY7bGuLcuMfKeu",
    "user_2WbwZuTUHX15KDP8RuTwHAia8tJ",
  ];
  const user = await currentUser();
  if (!user || !allowedUsers.includes(user.id)) {
    return (
      <div className="flex items-center justify-center flex-col min-h-screen">
        <h1 className="text-3xl font-bold">Unauthorized</h1>
        <p>
          You are not authorized to view this page. Please log in with the
          correct account or contact support.
        </p>
      </div>
    );
  }
  return <div>{children}</div>;
}

export default AppLayout;
