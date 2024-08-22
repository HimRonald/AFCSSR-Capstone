"use client";

import { useState, SetStateAction, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useDropzone } from "react-dropzone";

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
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input, InputControl } from "@/components/ui/input";
import { FileInput } from "flowbite-react";

import createMember from "@/firebase/firestore/members/createMember";
import uploadImage from "@/firebase/storage/uploadImage";

import { toast } from "react-toastify";

const FormSchema = z.object({
  //personal info
  first_name: z.string().min(1, "Please enter your first name."),
  last_name: z.string().min(1, "Please enter your last name."),
  title: z.string().min(1, "Please enter your title."),
  gender: z.string().min(1, "Please select a gender."),
  dateOfBirth: z.string().min(1, "Please select a date."),
  phone: z.string().min(1, "Please enter your phone number."),
  email: z.string().min(1, "Please enter your email."),

  //education info
  university: z.string().min(1, "Please enter your university."),
  qualification: z.string().min(1, "Please select a qualification."),
  major: z.string().min(1, "Please enter your major."),
  country: z.string().min(1, "Please select a country."),
  commencementDate: z.string().min(1, "Please enter a date."),
  graduationDate: z.string().min(1, "Please enter a date."),

  //professional info
  sector: z.string().min(1, "Please select a sector."),
  orgName: z.string().min(1, "Please enter your organization name."),
  occupation: z.string().min(1, "Please enter your occupation."),

  //business info
  business: z.array(
    z.object({
      name: z.string().min(1, "Please enter your business name."),
      position: z.string().min(1, "Please enter your position."),
      type: z.string().min(1, "Please enter your business type."),
      description: z.string().min(1, "Please enter your business description."),
      phone: z.string().min(1, "Please enter your business phone number."),
      email: z.string().min(1, "Please enter your business email."),
      address: z.string().min(1, "Please enter your business address."),
    })
  ),
  businessTypes: z.array(z.string()),

  //payment info
  payment: z.string().min(1, "Please select payment status"),
  //   payment: z.string().min(1, "Please upload your payment receipt."),
});

export default function RegisterMemberForm() {
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState<File | null>(null);
  const [employmentType, setEmploymentType] = useState("");
  const [addBusiness, setAddBusiness] = useState<number[]>([]);

  const handleAddBusinessButton = () => {
    setAddBusiness([...addBusiness, addBusiness.length]);
  };

  const handleRemoveBusinessButton = (index: number) => {
    setAddBusiness(addBusiness.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const parsedData = FormSchema.safeParse(data);
      console.log(parsedData);

      if (!parsedData.success) {
        toast.error("Form is invalid or empty!");
        return;
      }

      if (file) {
        await uploadImage("member_request", file);
        data.payment = file.name;
      }

      await createMember(data);

      form.reset();
      setImagePreview(null);
      setFile(null);

      toast.success("You have successfully registered!");
    } catch (error) {
      console.error("Error creating article: ", error);
      toast.error("Failed to register!");
    }
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      title: "",
      gender: "",
      dateOfBirth: "",
      phone: "",
      email: "",

      university: "",
      qualification: "",
      major: "",
      country: "",
      commencementDate: "",
      graduationDate: "",

      sector: "",
      orgName: "",
      occupation: "",
      business: [],
      businessTypes: [],

      payment: "",
    },
  });

  return (
    <div className="my-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-full space-y-6">
            <span className="font-semibold font-libre text-[#027AC6] text-[20px]">
              Personal Information
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12 mx-12 justify-center">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-base">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="first_name"
                        className="h-[56px] rounded-xl mt-[7px]"
                        onChange={(e) => {
                          field.onChange(e);
                          // handleChange("title", e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-base">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="last_name"
                        className="h-[56px] rounded-xl mt-[7px]"
                        onChange={(e) => {
                          field.onChange(e);
                          //   handleChange("title", e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-base">
                      Title
                    </FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        // handleChange("status", value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-[56px] rounded-xl mt-[7px]">
                          <SelectValue placeholder="Select Title" />
                        </SelectTrigger>
                      </FormControl>
                      <FormMessage />
                      <SelectContent>
                        <SelectItem value="Mr">Mr</SelectItem>
                        <SelectItem value="Ms">Ms</SelectItem>
                        <SelectItem value="Mrs">Mrs</SelectItem>
                        <SelectItem value="Dr">Dr</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12 mx-12 justify-center">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-base">
                      Gender
                    </FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        // handleChange("status", value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-[56px] rounded-xl mt-[7px]">
                          <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                      </FormControl>
                      <FormMessage />
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-base">
                      Date of Birth
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="date"
                        id="dateOfBirth"
                        className="h-[56px] rounded-xl mt-[7px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-base">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="phone"
                        className="h-[56px] rounded-xl mt-[7px]"
                        onChange={(e) => {
                          field.onChange(e);
                          //   handleChange("title", e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 gap-y-6 mx-12 justify-center">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-3 w-full">
                    <FormLabel className="font-semibold text-base">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="email"
                        className="h-[56px] rounded-xl mt-[7px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="w-full space-y-6 mt-10">
            <span className="font-semibold text-[#027AC6] text-[20px] font-libre">
              Education Information
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12 mx-12 justify-center">
              <FormField
                control={form.control}
                name="university"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-base">
                      Name of Attended University
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="university"
                        className="h-[56px] rounded-xl mt-[7px]"
                        onChange={(e) => {
                          field.onChange(e);
                          //   handleChange("title", e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="qualification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-base">
                      Qualification
                    </FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        // handleChange("status", value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-[56px] rounded-xl mt-[7px]">
                          <SelectValue placeholder="Select Qualification" />
                        </SelectTrigger>
                      </FormControl>
                      <FormMessage />
                      <SelectContent>
                        <SelectItem value="Undergraduate">
                          Undergraduate
                        </SelectItem>
                        <SelectItem value="Postgraduate">
                          Postgraduate
                        </SelectItem>
                        <SelectItem value="Ph.D">Ph.D</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="major"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-base">
                      Major
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="major"
                        className="h-[56px] rounded-xl mt-[7px]"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          //   handleChange("title", e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12 mx-12 justify-center">
              <FormField
                control={form.control}
                name="commencementDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-base">
                      Commencement Date
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="commencementDate"
                        type="date"
                        className="h-[56px] rounded-xl mt-[7px]"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          //   handleChange("title", e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="graduationDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-base">
                      Graduation Date
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="graduationDate"
                        type="date"
                        className="h-[56px] rounded-xl mt-[7px]"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          //   handleChange("title", e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-base">
                      Country
                    </FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        // handleChange("status", value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-[56px] rounded-xl mt-[7px]">
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                      </FormControl>
                      <FormMessage />
                      <SelectContent>
                        <SelectItem value="Armenia">
                          <img
                            src="https://flagcdn.com/w20/am.png"
                            alt="Armenia Flag"
                            className="inline-block mr-2"
                          />
                          Armenia
                        </SelectItem>
                        <SelectItem value="Azerbaijan">
                          <img
                            src="https://flagcdn.com/w20/az.png"
                            alt="Azerbaijan Flag"
                            className="inline-block mr-2"
                          />
                          Azerbaijan
                        </SelectItem>
                        <SelectItem value="Belarus">
                          <img
                            src="https://flagcdn.com/w20/by.png"
                            alt="Belarus Flag"
                            className="inline-block mr-2"
                          />
                          Belarus
                        </SelectItem>
                        <SelectItem value="Estonia">
                          <img
                            src="https://flagcdn.com/w20/ee.png"
                            alt="Estonia Flag"
                            className="inline-block mr-2"
                          />
                          Estonia
                        </SelectItem>
                        <SelectItem value="Georgia">
                          <img
                            src="https://flagcdn.com/w20/ge.png"
                            alt="Georgia Flag"
                            className="inline-block mr-2"
                          />
                          Georgia
                        </SelectItem>
                        <SelectItem value="Kazakhstan">
                          <img
                            src="https://flagcdn.com/w20/kz.png"
                            alt="Kazakhstan Flag"
                            className="inline-block mr-2"
                          />
                          Kazakhstan
                        </SelectItem>
                        <SelectItem value="Kyrgyzstan">
                          <img
                            src="https://flagcdn.com/w20/kg.png"
                            alt="Kyrgyzstan Flag"
                            className="inline-block mr-2"
                          />
                          Kyrgyzstan
                        </SelectItem>
                        <SelectItem value="Latvia">
                          <img
                            src="https://flagcdn.com/w20/lv.png"
                            alt="Latvia Flag"
                            className="inline-block mr-2"
                          />
                          Latvia
                        </SelectItem>
                        <SelectItem value="Lithuania">
                          <img
                            src="https://flagcdn.com/w20/lt.png"
                            alt="Lithuania Flag"
                            className="inline-block mr-2"
                          />
                          Lithuania
                        </SelectItem>
                        <SelectItem value="Moldova">
                          <img
                            src="https://flagcdn.com/w20/md.png"
                            alt="Moldova Flag"
                            className="inline-block mr-2"
                          />
                          Moldova
                        </SelectItem>
                        <SelectItem value="Russia">
                          <img
                            src="https://flagcdn.com/w20/ru.png"
                            alt="Russia Flag"
                            className="inline-block mr-2"
                          />
                          Russia
                        </SelectItem>
                        <SelectItem value="Tajikistan">
                          <img
                            src="https://flagcdn.com/w20/tj.png"
                            alt="Tajikistan Flag"
                            className="inline-block mr-2"
                          />
                          Tajikistan
                        </SelectItem>
                        <SelectItem value="Turkmenistan">
                          <img
                            src="https://flagcdn.com/w20/tm.png"
                            alt="Turkmenistan Flag"
                            className="inline-block mr-2"
                          />
                          Turkmenistan
                        </SelectItem>
                        <SelectItem value="Ukraine">
                          <img
                            src="https://flagcdn.com/w20/ua.png"
                            alt="Ukraine Flag"
                            className="inline-block mr-2"
                          />
                          Ukraine
                        </SelectItem>
                        <SelectItem value="Uzbekistan">
                          <img
                            src="https://flagcdn.com/w20/uz.png"
                            alt="Uzbekistan Flag"
                            className="inline-block mr-2"
                          />
                          Uzbekistan
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="w-full space-y-6 mt-10">
            <span className="font-semibold text-[#027AC6] text-[20px] font-libre">
              Professional Information
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12 mx-12 justify-center">
              <FormField
                control={form.control}
                name="sector"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-base">
                      Sector
                    </FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        setEmploymentType(value);
                        // handleChange("status", value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-[56px] rounded-xl mt-[7px]">
                          <SelectValue placeholder="Select Sector" />
                        </SelectTrigger>
                      </FormControl>
                      <FormMessage />
                      <SelectContent>
                        <SelectItem value="Public">Public</SelectItem>
                        <SelectItem value="Private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              {employmentType !== "" && (
                <>
                  <FormField
                    control={form.control}
                    name="orgName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-base">
                          {employmentType === "Public"
                            ? "Ministry"
                            : "Company / Organization"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="orgName"
                            className="h-[56px] rounded-xl mt-[7px]"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              //   handleChange("title", e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="occupation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-base">
                          Position
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            id="occupation"
                            className="h-[56px] rounded-xl mt-[7px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
            </div>
          </div>

          <div className="w-full space-y-6 mt-10">
            <span className="font-semibold text-[#027AC6] text-[20px] font-libre">
              Business Information (Optional)
            </span>

            {addBusiness.map((panel, index) => (
              <div
                key={index}
                className="flex flex-col border-x-2 border-y-2 rounded-xl"
              >
                <button
                  onClick={() => handleRemoveBusinessButton(index)}
                  className="cursor-pointer ml-auto relative"
                >
                  <img src="/Images/Minus Sign.svg" alt="" />
                </button>

                <div className="space-y-6 mt-6 mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12 mx-12 justify-center">
                    <FormField
                      control={form.control}
                      name={`business.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-base">
                            Business Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id="businessName"
                              className="h-[56px] rounded-xl mt-[7px]"
                              onChange={(e) => {
                                field.onChange(e);
                                //   handleChange("title", e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`business.${index}.position`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-base">
                            Position / Title
                          </FormLabel>
                          <FormControl>
                            <Input
                              id="businessTitle"
                              className="h-[56px] rounded-xl mt-[7px]"
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                //handleChange("title", e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`business.${index}.type`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-base">
                            Business Type / Industry
                          </FormLabel>
                          <FormControl>
                            <Input
                              id="businessType"
                              className="h-[56px] rounded-xl mt-[7px]"
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                //   handleChange("title", e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 mx-12 justify-center">
                    <FormField
                      control={form.control}
                      name={`business.${index}.description`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-base">
                            Business Description
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id="businessDescription"
                              className="h-[56px] rounded-xl mt-[7px]"
                              onChange={(e) => {
                                field.onChange(e);
                                //   handleChange("title", e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mx-12 justify-center">
                    <FormField
                      control={form.control}
                      name={`business.${index}.phone`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-base">
                            Business Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id="businessPhoneNumber"
                              className="h-[56px] rounded-xl mt-[7px]"
                              onChange={(e) => {
                                field.onChange(e);
                                //   handleChange("title", e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`business.${index}.email`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-base">
                            Business Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              id="businessEmail"
                              className="h-[56px] rounded-xl mt-[7px]"
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                //   handleChange("title", e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 mx-12 justify-center">
                    <FormField
                      control={form.control}
                      name={`business.${index}.address`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-base">
                            Business Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id="businessAddress"
                              className="h-[56px] rounded-xl mt-[7px]"
                              onChange={(e) => {
                                field.onChange(e);
                                //   handleChange("title", e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            ))}

            <Button
              onClick={handleAddBusinessButton}
              id="addBusiness"
              type="button"
              className="w-full h-[75px] bg-[#027AC6] flex flex-col justify-center items-center rounded-xl"
            >
              <span className="font-semibold text-white">Add +</span>
            </Button>
          </div>

          <div className="my-10">
            <span className="font-semibold text-[#027AC6] text-[20px] font-libre">
              Payment Information
            </span>
            <div>
              <div className="w-full h-full mt-[25px] lg:flex grid grid-col-1 container justify-center">
                <div className="mx-auto">
                  <img src="/Images/IMG_5308 1.png" alt="" />
                </div>

                <div className="lg:ml-[100px]">
                  <div className="lg:mt-[50px] mt-5 mb-[21px] lg:mr-[100px]">
                    <span>
                      Make a payment for the annual membership fee of
                      <span className="text-[#027AC6] font-semibold">
                        {" "}
                        30USD{" "}
                      </span>
                      through KHQR or our account information
                    </span>
                  </div>

                  <div className="mb-[21px]">
                    <span>Bank Name : ACLEDA</span>
                  </div>

                  <div className="mb-[21px]">
                    <span>Bank Account Number :</span>
                  </div>

                  <div className="mb-[21px]">
                    <span>Bank Account Holder :</span>
                  </div>

                  <div className="flex items-center gap-x-[70px]">
                    <div className="my-[35px]">
                      <FormLabel className="font-semibold text-base my-auto">
                       Payment Status
                      </FormLabel> 
                    </div>

                    <div>
                      <FormField
                        control={form.control}
                        name="payment"
                        render={({ field }) => (
                          <FormItem>
                            <Select 
                              onValueChange={(value) => {
                              field.onChange(value);
                            }}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-[210px] h-[56px] rounded-xl mt-[7px]">
                                  <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                              </FormControl>
                              <FormMessage />
                              <SelectContent>
                                <SelectItem value="PayNow">I will pay now</SelectItem>
                                <SelectItem value="PayLater">I will pay later</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}                     
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-[75px] bg-[#027AC6] justify-center items-center rounded-xl"
          >
            <span className="font-semibold text-white">Submit</span>
          </Button>
        </form>
      </Form>
    </div>
  );
}
