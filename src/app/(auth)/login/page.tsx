"use client";

import Link from 'next/link'
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

export default function Login() {
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="grid md:grid-cols-2 w-full h-full">
      <div className="md:bg-[#027AC6] md:w-full flex md:flex-col gap-y-12 justify-center items-center text-center text-white">
        <Link href="/">
          <Image
            src="/Images/afcssr-logo.svg"
            alt="footer logo"
            width={200}
            height={200}
          />
        </Link>

        <div className="hidden md:flex flex-col gap-y-2 mx-12">
          <p className="font-moul text-2xl font-light">
            សមាគមអតីតនិស្សិតកម្ពុជាពីសូវៀត និងរុស្សុី
          </p>
          <p className="text-lg">
            ASSOCIATION OF FORMER CAMBODIAN STUDENTS FROM
            <br />
            SOVIET UNION AND RUSSIA
          </p>
          <p className="text-lg">
            АССОЦИАЦИЯ БЫВШИХ КАМБОДЖИЙСКИХ СТУДЕНТОВ ИЗ СОВЕТСКОГО СОЮЗА И
            РОССИИ
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-8 items-center justify-center">
        <div className="header-titles flex flex-col gap-y-4 text-center uppercase">
          <p className="text-xl md:text-2xl lg:text-4xl">Welcome To</p>
          <p className="font-libre text-5xl md:text-6xl lg:text-8xl text-[#027AC6]">ACSSR</p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2 w-3/4 md:w-1/2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className="h-12 border-gray-200 hover:border-gray-400 rounded-xl"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
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
                      {...field}
                      type="password"
                      className="h-12 border-gray-200 hover:border-gray-400 rounded-xl focus:ring active:bg-gray-400"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <button className="filled-btn bg-[#027AC6] h-12 text-white uppercase p-2 rounded-xl">
              Login
            </button>
          </form>
        </Form>

        <div className="w-3/4 md:w-1/2 space-y-3">
          <div className="divider flex items-center gap-x-2.5 text-xs text-gray-400">
            <hr className="flex-grow" />
            <p>Or Sign In With</p>
            <hr className="flex-grow" />
          </div>

          <div className="social-login flex justify-center gap-x-9">
            <div className="flex flex-col items-center gap-y-1.5">
              <div>
                <button
                  onClick={() => console.log("Facebook")}
                  className="social-btn px-2.5 py-4 flex justify-center border border-gray-400 rounded-xl"
                >
                  <Image
                    src="/icons/facebook-icon.svg"
                    alt="Facebook"
                    width={36}
                    height={36}
                  />
                </button>
              </div>
              <p className="text-sm text-gray-500">Facebook</p>
            </div>
            <div className="flex flex-col items-center gap-y-1.5">
              <div>
                <button
                  onClick={() => console.log("Google")}
                  className="social-btn px-2.5 py-4 flex justify-center border border-gray-400 rounded-xl"
                >
                  <Image
                    src="/icons/google-icon.svg"
                    alt="Google"
                    width={36}
                    height={36}
                  />
                </button>
              </div>
              <p className="text-sm text-gray-500">Google</p>
            </div>
          </div>

          <hr className="divider text-gray-400" />
        </div>

        <button className="outline-btn w-3/4 md:w-1/2 h-12 text-[#027AC6] uppercase p-2 border border-[#027AC6] rounded-xl">
          Register Now
        </button>
      </div>
    </div>
  );
}
