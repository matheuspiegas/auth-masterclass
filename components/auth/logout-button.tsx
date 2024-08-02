"use client";

import { logout } from "@/actions/logout";
import { signOut } from "next-auth/react";
import { ReactNode } from "react";

interface LogoutButtonProps {
  children?: ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    signOut({ callbackUrl: "/auth/login" });
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
