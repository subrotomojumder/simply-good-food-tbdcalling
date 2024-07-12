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
import { createElement, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const loginSchema = z
  .object({
    userName: z.string().optional(),
    email: z.string().email(),
    phone: z.string().optional(),
    address: z.string().optional(),
    password: z.string().min(6, "Invalid Password !"),
    confirmPassword: z.string().min(6, "Invalid Password !"),
    terms: z.boolean().refine((val) => val === true, {
      message: "Please accept the terms.",
    }),
  })
  .refine(
    (data) => {
      if (!data.confirmPassword) {
        return true;
      }
      if (data.password !== data.confirmPassword) {
        return false;
      }
    },
    {
      message: "Password and confirm password be same!",
    }
  );
type TLoginData = z.infer<typeof loginSchema>;

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);
  const form = useForm<TLoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      confirmPassword: "",
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
        <div className="min-h-screen flex items-center justify-end lg:py-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 w-full md:max-w-lg md:rounded-3xl px-6 md:px-12 py-10 bg-gray-100/95 shadow-lg"
            >
              <h2 className="text-xl lg:text-2xl text-slate-800 font-semibold text-center">
                Sign up
              </h2>
              <p className="text-sm text-green-900 text-center">
                Please Enter Your Personal Data
              </p>
              <FormField
                name="userName"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-slate-600">
                      User Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-full py-4 px-4 h-11 shadow-sm"
                        placeholder="subro majumder"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-slate-600">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-full py-4 px-4 h-11 shadow-sm"
                        placeholder="subr@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                name="phone"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-slate-600">
                      Contact no.
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-full py-4 px-4 h-11 shadow-sm"
                        placeholder="+880 16044****45"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                name="address"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-slate-600">
                      Contact no.
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-full py-4 px-4 h-11 shadow-sm"
                        placeholder="R no-1, Block-B, City-x"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-slate-600">
                      Password
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          className="rounded-full py-4 pl-4 pr-12 h-11 shadow-sm"
                          placeholder={showPass ? "Password" : "*********"}
                          type={showPass ? "text" : "password"}
                          {...field}
                        />
                      </FormControl>
                      <button
                        onClick={() => setShowPass((c) => !c)}
                        type="button"
                        className="absolute right-4 bottom-2.5 outline-none focus:outline-none text-gray-500"
                      >
                        {createElement(showPass ? EyeOff : Eye, { size: "23" })}
                      </button>
                    </div>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-slate-600">
                      Confirm Password
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          className="rounded-full py-4 pl-4 pr-12 h-11 shadow-sm"
                          placeholder={showCPass ? "Password" : "*********"}
                          type={showCPass ? "text" : "password"}
                          {...field}
                        />
                      </FormControl>
                      <button
                        onClick={() => setShowCPass((c) => !c)}
                        type="button"
                        className="absolute right-4 bottom-2.5 outline-none focus:outline-none text-gray-500"
                      >
                        {createElement(showCPass ? EyeOff : Eye, {
                          size: "23",
                        })}
                      </button>
                    </div>
                    <FormMessage className="font-normal" />
                    {Object.values(form.formState.errors).length === 1 && (
                      <span className="text-sm text-red-500 dark:text-red-900">
                        {Object.values(form.formState.errors)[0].message}
                      </span>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2 pt-1.5">
                      <FormControl>
                        <Checkbox
                          className="ring ring-blue-300 checked:ring-blue-500"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-base text-gray-500 font-normal">
                        Remember Password?
                      </FormLabel>
                    </div>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <div className="text-center">
                <Button
                  size={"lg"}
                  className="w-fit bg-[#277e16] mx-auto px-12 rounded-xl font-light"
                  type="submit"
                  //  disabled={isLoading}
                >
                  Sin up
                </Button>
              </div>
              <div className="flex justify-center items-center gap-2 pt-2">
                <span className="text-slate-500">
                  Already have any account?{" "}
                </span>
                <Link href={"/login"}>
                  <Button
                    type="button"
                    variant={"link"}
                    className="p-0 text-green-600"
                  >
                    Sign in
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

export default Register;
