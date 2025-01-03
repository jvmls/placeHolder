import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-4 bg-black text-white">
      <h1>Login</h1>
      <Button className="bg-white text-black rounded-xl">Log in</Button>
    </div>
  );
}
