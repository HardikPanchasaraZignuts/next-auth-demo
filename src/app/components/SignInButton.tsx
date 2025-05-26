"use client";
import { useRouter } from "next/navigation";

export default function SignInButton({
  pathname,
  buttonText,
}: {
    pathname: string;
    buttonText: string;
}) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(pathname)}
      className="bg-slate-600 p-2 rounded text-white block mx-auto"
    >
      {buttonText}
    </button>
  );
}
