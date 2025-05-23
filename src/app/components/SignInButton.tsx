"use client";
import { useRouter } from "next/navigation";

export default function SignInButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("api/auth/signin")}
      className="bg-slate-600 p-2 rounded text-white block mx-auto"
    >
      Sign in
    </button>
  );
}
