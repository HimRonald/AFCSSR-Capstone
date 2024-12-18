"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Map } from "./map";
import { useState } from "react";
import UserCard from "./card";

import { toast } from "react-toastify";
import { Textarea } from "@/components/ui/textarea";

//import createMessage from "@/firebase/firestore/messages/createMessage";

const FormSchema = z.object({
  first_name: z.string({
    required_error: "Please enter a name.",
  }),
  email: z.string({
    required_error: "Please enter a message.",
  }),
  subject: z.string({
    required_error: "Please enter a subject.",
  }),
  message: z.string({
    required_error: "Please enter a message.",
  }),
});

const onSubmit = async (data: z.infer<typeof FormSchema>) => {
  try {
    //await createMessage(data);
  } catch (error) {
    console.log(error);
  }
};

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);
    try {
      //await createMessage(data);
      setLoading(false);
      form.reset();

      toast.success("Message has been sent!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message!");
    }
  };

  const users = [
    {
      name: "SOR Seileang",
      title: "Treasurer & Executive Committee Chairman Assistance",
      image: "/Images/profile/Ratana.jpg",
    },
    {
      name: "NORNG Rithy",
      title: "Secretary of Executive Committee",
      image: "/Images/profile/Ronald.jpg",
    },
    {
      name: "NHOUNG Manith",
      title: "Member of Third Committee",
      image: "/Images/profile/tramit.jpg",
    },
  ];

  return (
    <div>
      <div className="h-32 bg-[#027AC6] justify-center flex flex-col items-center">
        <span className="text-[40px] text-white font-libre font-semibold">
          Contact
        </span>
      </div>
      <div>
        <Map />
      </div>

      <div className="my-[25px] mx-auto container">
        <span className="font-semibold my-10 font-libre text-[30px]">
          VISIT US
        </span>
      </div>

      <div className="mx-auto grid sm:grid-cols-2 w-full container">
            <div className="mt-[26px] mx-auto">
              <div className="text-[18px]">
                <p className="font-semibold">Branch #1</p>
                <p>
                  2nd Bridge, Prek Leap, National Road Number 6, Phnom Penh, Cambodia
                </p>
              </div>

              <button
                type="button"
                className="w-[162px] h-[60px] bg-[#027AC6] my-[15px] flex flex-col justify-center items-center rounded-xl"
              >
                <span className="font-semibold text-white">Get Direction</span>
              </button>
            </div>
            <div className="mt-[26px] mx-auto">
              <div className="text-[18px]">
                <p className="font-semibold">Branch #2</p>
                <p>
                   #23 F, Nat.5, Svay Pak District  Khan Russei Keo, Phnom Penh
                </p>
              </div>

              <button
                type="button"
                className="w-[162px] h-[60px] bg-[#027AC6] my-[15px] flex flex-col justify-center items-center rounded-xl"
              >
                <span className="font-semibold text-white">Get Direction</span>
              </button>
            </div>
      </div>

      <div className="my-[25px] mx-auto container">
        <span className="font-semibold my-10 font-libre text-[30px]">
          CONTACT US
        </span>
      </div>
      <div className="mx-auto container">
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.slice(0, showMore ? users.length : 4).map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              title={user.title}
              image={user.image}
            />
          ))}
        </div>
        <button
          onClick={() => setShowMore(!showMore)}
          className="mx-auto container text-gray-500"
        >
          {showMore ? "Show less" : "See more"}
        </button>
      </div>

      <div className="my-[25px] mx-auto container">
        <span className="font-semibold my-10 font-libre text-[30px]">
          SEND MESSAGES
        </span>
      </div>
      <div className="mx-auto container">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex justify-between">
              {/* <div className="flex flex-row">
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold">
                    First Name{" "}
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="w-[610px] h-[56px] rounded-xl mt-[7px]"
                    onChange={handleChange}
                  />
                </div>
              </div> */}
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        id="first_name"
                        className="w-[610px] h-[56px] rounded-xl mt-[7px]"
                        placeholder="Enter first name"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <div>
                <div className="ml-[60px] flex flex-col">
                  <label htmlFor="" className="font-semibold">
                    Email{" "}
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-[610px] h-[56px] rounded-xl mt-[7px]"
                    onChange={handleChange}
                  />
                </div>
              </div> */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        className="w-[610px] h-[56px] rounded-xl mt-[7px]"
                        placeholder="Enter email"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex mb-[25px]">
              {/* <div className="flex flex-row">
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold">
                    Subject{" "}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-[1280px] h-[56px] rounded-xl mt-[7px]"
                    onChange={handleChange}
                  />
                </div>
              </div> */}
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        id="subject"
                        className="w-[1336px] h-[56px] rounded-xl mt-[7px]"
                        placeholder="Enter subject"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex mb-[25px]">
              {/* <div className="flex flex-row">
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold">
                    Message{" "}
                  </label>
                  <input
                    type="text"
                    id="message"
                    className="w-[1280px] h-[430px] rounded-xl mt-[7px]"
                    // onChange={handleChange}
                  />
                </div>
              </div> */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        id="message"
                        className="w-[1336px] h-[430px] rounded-xl mt-[7px] "
                        placeholder="Enter message"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <button
              type="submit"
              className="w-[162px] h-[60px] bg-[#027AC6] my-[15px] flex flex-col justify-center items-center rounded-xl"
            >
              <span className="font-semibold text-white">
                {loading ? "Sending..." : "Send"}
              </span>
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
}
