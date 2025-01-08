"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-4 bg-black text-white">
      <h1>Welcome to Nameless!</h1>
      <h2>
        Using this tool, you can manage and play your RPG Games from a whole
        different perspective
      </h2>
      <h3>
        If you don't have an account yet, you can join us by clicking on the
        button below:
      </h3>
      <Button
        className="hover:bg-gray-500 transition-colors duration-300 rounded border-white"
        onClick={() => router.push("/login")}
      >
        Create an Account
      </Button>
    </div>
  );
}
