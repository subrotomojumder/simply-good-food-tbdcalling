"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Container from "@/components/Container";
import { Checkbox } from "@/components/ui/checkbox";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Invalid Password !"),
  terms: z.boolean().refine((val) => val === true, {
    message: "Please accept the terms.",
  }),
});
type TLoginData = z.infer<typeof loginSchema>;

const Login = () => {
  const form = useForm<TLoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      terms: false,
    },
  });
  const onSubmit = async (values: TLoginData) => {
    console.log(values);
  };
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(23, 1, 12, 0.10), rgba(23, 1, 12, 0.30)), url(https://i.ibb.co/mHXRZfP/mans.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundOrigin: "content-box",
        backgroundRepeat: "repeat",
      }}
    >
      <Container className="max-w-5xl">
        <div className="min-h-screen flex items-center justify-end">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full md:max-w-lg md:rounded-3xl px-6 md:px-12 py-10 bg-white/90 shadow-lg"
            >
              <h2 className="text-xl lg:text-2xl text-slate-800 font-semibold text-center">
                Sign in to your account
              </h2>
              <p className="text-sm text-green-900 text-center">
                Please enter your email and password to continue
              </p>
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-slate-600 pl-0.5">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-full py-4 px-4 h-11"
                        placeholder="subr@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-normal -pb-4" />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-slate-600 pl-0.5">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-full py-4 px-4 h-11"
                        placeholder="*********"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <div className="flex justify-between items-start">
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2 pt-1.5">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-base text-gray-500 font-normal">
                          Remember Password?
                        </FormLabel>
                      </div>
                      <FormMessage className="font-normal -pb-4" />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant={"link"}
                  className="text-base text-green-800 font-normal"
                >
                  Forget Password?
                </Button>
              </div>

              <div className="text-center">
                <Button
                  size={"lg"}
                  className="w-fit bg-[#277e16] mx-auto px-12 rounded-xl font-light"
                  type="submit"
                  //  disabled={isLoading}
                >
                  Log in
                </Button>
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className="text-slate-500">Don’t have any account? </span>
                <Link href={"/register"}>
                  <Button
                    type="button"
                    variant={"link"}
                    className="p-0 text-green-600"
                  >
                    Sign up
                  </Button>
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
