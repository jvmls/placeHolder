"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignUp from "./signUp";
import SignIn from "./signIn";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-4 bg-black text-white">
      <Tabs defaultValue="sign-in" className="w-[400px] rounded">
        <TabsList className="grid w-full grid-cols-2 gap-2">
          <TabsTrigger className="border" value="sign-in">
            Sign in
          </TabsTrigger>
          <TabsTrigger className="border" value="sing-up">
            Sign up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <SignIn />
        </TabsContent>
        <TabsContent value="sing-up">
          <SignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
}
