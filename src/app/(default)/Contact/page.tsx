"use client"

import { useState } from "react";
import { toast } from "react-toastify";
import createMessage from "@/firebase/firestore/messages/createMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import UserCard from "./card";

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
    await createMessage(data);
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
      await createMessage(data);
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
      title: "Treasurer & Chairman Assistant",
      image: "/Images/ACSSR-Member-Pics/Membership of Executive Committee  /sor_seileang.jpg",
      phone: "+885 77 983 698",
    },
    {
      name: "NORNG Rithy",
      title: "Secretary of Executive Committee",
      image: "/Images/NORNGRITHY.JPEG",
      phone: "+885 70 321 481",
    },
    {
      name: "NHOUNG Manith",
      title: "Member of Third Committee",
      image: "/Images/ACSSR-Member-Pics/Third Committee/nhoung_manith.jpg",
      phone: "+885 12 303 748",
    },
  ];

  return (
    <div>
      <div className="h-32 bg-[#027AC6] justify-center flex flex-col items-center">
        <span className="text-[40px] text-white font-libre font-semibold">Contact</span>
      </div>
      <div>
        <Map />
      </div>


      <div className="my-[25px] mx-auto container">
        <span className="font-semibold my-10 font-libre text-[30px]">VISIT US</span>

        <div className="flex justify-between space-x-4 mt-10"> {/* Flex container for row layout */}

          {/* Branch 1 */}
          <div className="flex flex-col w-1/3">
            <p className="font-semibold text-lg">Branch #1</p>
            <p>Room 519, IU University Building Khan Sen Sok, 
            Phnom Penh</p>
            <button
              type="button"
              className="w-[162px] h-[60px] bg-[#027AC6] my-[15px] flex justify-center items-center rounded-xl"
            >
              <a
                href="https://maps.app.goo.gl/pHZuH5oGkX9FvRC37"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold text-white">Get Direction</span>
              </a>
            </button>
          </div>

          {/* Branch 2 */}
          <div className="flex flex-col">
            <p className="font-semibold text-lg">Branch #2</p>
            <p>#23 F, Nat.5, Svay Pak District Khan Russei Keo, Phnom Penh</p>
            <button
              type="button"
              className="w-[162px] h-[60px] bg-[#027AC6] my-[15px] flex justify-center items-center rounded-xl"
            >
              <a
                href="https://maps.app.goo.gl/sa6E6x7LwakZRESv9?g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold text-white">Get Direction</span>
              </a>
            </button>
          </div>

          {/* Add more branches if needed */}
        </div>
      </div>


      <div className="my-[25px] mx-auto container">
        <span className="font-semibold my-10 font-libre text-[30px]">CONTACT US</span>
      </div>
      <div className="mx-auto container">
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.slice(0, showMore ? users.length : 4).map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              title={user.title}
              image={user.image}
              phone={user.phone} // Add phone to UserCard component
            />
          ))}
        </div>
        {/* <button
          onClick={() => setShowMore(!showMore)}
          className="mx-auto container text-gray-500"
        >
          {showMore ? "Show less" : "See more"}
        </button> */}
      </div>

      <div className="my-[25px] mt-[25px] mx-auto container">
        <span className="font-semibold my-10 font-libre text-[30px]">SEND MESSAGES</span>
      </div>
      <div className="mx-auto my-[25px] container">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex justify-between">
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
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex mb-[25px] mt-[25px]">
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
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex mb-[25px]">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Input
                        id="message"
                        className="w-[1336px] h-[430px] rounded-xl mt-[7px]"
                        placeholder="Enter message"
                        {...field}
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
