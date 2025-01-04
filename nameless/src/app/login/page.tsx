"use client";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  const formSchema = z
    .object({
      email: z.string().email({ message: "Invalid email address." }),
      password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long." })
        .regex(/[A-Z]/, {
          message: "Password must contain at least one uppercase letter.",
        })
        .regex(/[a-z]/, {
          message: "Password must contain at least one lowercase letter.",
        })
        .regex(/[0-9]/, {
          message: "Password must contain at least one number.",
        })
        .regex(/[\W_]/, {
          message: "Password must contain at least one special character.",
        }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "As senhas não coincidem.",
      path: ["confirmPassword"],
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    //TUDO: add API
    console.log(values);
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-4 bg-black text-white">
      <Tabs defaultValue="account" className="w-[400px] rounded">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger className="" value="sing-up">
            Sign up
          </TabsTrigger>
          <TabsTrigger value="sign-in">Sign in</TabsTrigger>
        </TabsList>
        <TabsContent value="sing-up">
          <Card>
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>Sign up for a new account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <h1>Login</h1>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            className="w-full"
                            placeholder="Digite seu Email!"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          description placeholder
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            className="w-full"
                            placeholder="Digite sua senha!"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                        <FormDescription>
                          Password must be at least 8 characters long, contain
                          at least...
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirme sua Senha</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            className="w-full"
                            placeholder="Confirme sua Senha!"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Certifique-se de que as senhas sejam iguais.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <CardFooter>
                    {" "}
                    <Button
                      variant="outline"
                      className="hover:bg-gray-500 transition-colors duration-300 rounded"
                      type="submit"
                    >
                      Enviar
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sign-in">
          <h1>NIGGAAAAAAAAAAAAAAAAA</h1>
        </TabsContent>
      </Tabs>
    </div>
  );
}
