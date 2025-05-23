"use server";
import { auth } from "@/auth";
import Image from "next/image";
import AuthButton from "./components/AuthButton";
import SignInButton from "./components/SignInButton";

export default async function Home() {
  const session = await auth();
  console.log("session", session);

  if (session?.user) {
    const { name, email, image } = session.user;
    return (
      <div className="min-h-screen grid place-content-center">
        <div className="flex gap-5">
          <Image
            className="rounded-full"
            src={image ?? ""}
            alt="profile"
            width={48}
            height={48}
          />
          <div>
            <h1>{name}</h1>
            <p>{email}</p>
          </div>
          <AuthButton type="logout" />
        </div>
        
      </div>
    );
  }
  return (
    <div className="min-h-screen grid place-content-center">
      {/* <AuthButton type="login" /> */}
      <SignInButton />

      <p className="text-center mt-4">{`try protected route manually "/dashboard"`}</p>
    </div>
  );
}
