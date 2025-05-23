"use client";

import { login, logout } from "@/lib/actions/auth";

interface AuthButtonProps {
  type: "login" | "logout";
}
export default function AuthButton({ type }: AuthButtonProps) {
  const handleClick = () => {
    if (type === 'login') {
      login()
    } else {
      logout()
    }
  };
  return (
    <button
      onClick={handleClick}
      className="bg-slate-600 p-2 rounded text-white block mx-auto"
    >
      {type === "login" ? "Sign in with GitHub" : "Sign out"}
    </button>
  );
}
