"use client";

import InputControl from "@/components/Controlled/InputControl";
import SelectControl from "@/components/Controlled/SelectControl";
import { QualificationOptions, TitleOptions } from "@/constants/options";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";

export default function Page() {
  const [employmentType, setEmploymentType] = useState("");
  const [addBusiness, setAddBusiness] = useState<number[]>([]);

  const { handleSubmit, control } = useForm({});

  const handleAddBusinessButton = () => {
    setAddBusiness([...addBusiness, addBusiness.length]);
  };

  const handleRemoveBusinessButton = (index: number) => {
    setAddBusiness(addBusiness.filter((_, i) => i !== index));
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    },
  });

  return (
    <div>
      <div className="h-32 w-full bg-[#027AC6] justify-center flex flex-col items-center">
        <span className="text-[40px] text-white font-libre font-semibold">
          Membership
        </span>
      </div>

      <form className="mx-auto container" onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-[79px] mt-[50px]">
          <span className="font-libre font-bold text-[28px]">
            MEMBERSHIPS REGISTRATION
          </span>
        </div>
        <div className="w-full max-w-screen-xl mx-auto mt-[40px]">
          <span className="font-semibold font-libre text-[#027AC6] text-[20px]">
            Personal Information
          </span>
          <div className="mx-auto mt-[25px] flex flex-wrap justify-center">
            <InputControl
              name="first_name"
              control={control}
              type="text"
              label="First Name"
            />

            <InputControl
              name="last_name"
              control={control}
              type="text"
              label="Last Name"
            />

            <SelectControl
              options={TitleOptions}
              name="title"
              control={control}
              type="text"
              label="Title"
            />

            <SelectControl
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
              name="gender"
              control={control}
              type="text"
              label="Gender"
            />

            <InputControl
              name="date_of_birth"
              control={control}
              type="date"
              label="Date of Birth"
            />

            <InputControl
              name="citizenship"
              control={control}
              type="text"
              label="Citizenship"
            />

            <InputControl
              name="citizenship"
              control={control}
              type="text"
              label="Citizenship"
            />

            <InputControl
              name="phone"
              control={control}
              type="text"
              label="Personal Phone Number"
            />

            <InputControl
              name="email"
              control={control}
              type="text"
              label="Personal Email"
            />

            <InputControl
              name="email"
              control={control}
              type="text"
              label="Personal Email"
            />

            <InputControl
              name="address"
              control={control}
              type="text"
              label="Current Address"
            />
          </div>
        </div>

        <div className="w-full max-w-screen-xl mx-auto mt-[40px]">
          <span className="font-semibold text-[#027AC6] text-[20px] font-libre">
            Education Information
          </span>
          <div className="mx-auto mt-[25px] flex flex-wrap justify-center">
            <InputControl
              name="university"
              control={control}
              type="text"
              label="Name of Attended University"
            />
            <SelectControl
              options={QualificationOptions}
              name="qualification"
              control={control}
              type="text"
              label="Qualification"
            />

            <InputControl
              name="major"
              control={control}
              type="text"
              label="Field of Study / Major"
            />
            <InputControl
              name="commencementDate"
              control={control}
              type="date"
              label="Commencement Date"
            />

            <InputControl
              name="gradutationDate"
              control={control}
              type="date"
              label="Graduation Date"
            />
          </div>
        </div>

        <div className="w-full max-w-screen-xl mx-auto mt-[40px]">
          <span className="font-semibold text-[#027AC6] text-[20px] font-libre">
            Professional Information
          </span>
          <div className="mt-[25px]  mx-auto">
            <div className="mx-auto flex flex-wrap">
              <SelectControl
                options={[
                  { label: "Private", value: "private" },
                  { label: "Public", value: "public" },
                ]}
                onSelected={setEmploymentType}
                name="sector"
                control={control}
                type="text"
                label="Type of Employment"
              />

              {employmentType === "public" && (
                <div className="flex flex-wrap">
                  <InputControl
                    name="orgName"
                    control={control}
                    type="text"
                    label="Ministry"
                  />
                  <InputControl
                    name="occupation"
                    control={control}
                    type="text"
                    label="Occupation"
                  />
                </div>
              )}

              {employmentType === "private" && (
                <div className="flex flex-wrap">
                  <InputControl
                    name="orgName"
                    control={control}
                    type="text"
                    label="Company/ Organizatioin"
                  />
                  <InputControl
                    name="occupation"
                    control={control}
                    type="text"
                    label="Occupation"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full max-w-screen-xl flex flex-col justify-center mx-auto mt-[90px]">
          <span className="font-semibold text-[#027AC6] text-[20px] font-libre">
            Bussiness Information (Optional)
          </span>
          {addBusiness.map((panel, index) => (
            <div
              key={index}
              className="md:w-[1198px] mt-[25px] flex flex-col border-x-2 border-y-2 rounded-xl px-5 md:px-0"
            >
              <button
                onClick={() => handleRemoveBusinessButton(index)}
                className="cursor-pointer ml-auto relative"
              >
                <img src="/Images/Minus Sign.svg" alt="" />
              </button>
              <div className="flex flex-wrap mx-auto md:mt-[15px]">
                <div className="flex flex-col w-full md:w-[338px] md:ml-[42px]">
                  <label htmlFor="" className="font-semibold">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                </div>

                <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                  <label htmlFor="" className="font-semibold">
                    Position / Title <span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                </div>

                <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                  <label htmlFor="" className="font-semibold">
                    Business Type / Industry{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                </div>
              </div>

              <div className="w-full flex flex-wrap mx-auto md:mt-[25px]">
                <div className="flex flex-col w-full md:w-[1114px] md:ml-[60px]">
                  <label htmlFor="" className="font-semibold">
                    Business Description <span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                </div>
              </div>

              <div className="w-full flex flex-wrap mx-auto md:mt-[25px]">
                <div className="flex flex-col w-full md:w-[726px] md:ml-[60px]">
                  <label htmlFor="" className="font-semibold">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                </div>

                <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                  <label htmlFor="" className="font-semibold">
                    Business Phone Number{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                </div>
              </div>

              <div className="w-full flex flex-wrap mx-auto md:mt-[25px] mb-[25px]">
                <div className="flex flex-col w-full md:w-[1114px] md:ml-[60px]">
                  <label htmlFor="" className="font-semibold">
                    Business Address <span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={handleAddBusinessButton}
            id="addBusiness"
            type="button"
            className="md:w-[1198px] h-[75px] bg-[#027AC6] my-[15px] mx-[21px] flex flex-col justify-center items-center rounded-xl"
          >
            <span className="font-semibold text-white">Add +</span>
          </button>
        </div>

        <div className="w-full max-w-screen-xl flex flex-col justify-center mx-auto mt-[25px]">
          <span className="font-semibold text-[#027AC6] text-[20px] font-libre">
            Payment Information
          </span>
          <div className="">
            <div className="w-full h-full mt-[25px] md:flex mx-auto container">
              <div className="md:ml-[50px] ml-[100px] container">
                <img src="/Images/IMG_5308 1.png" alt="" />
              </div>

              <div className="md:ml-[100px]">
                <div className="md:mt-[70px] mt-5 mb-[21px]">
                  <span className="">
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
              </div>
            </div>

            <div className="w-full h-full mt-[25px] md:flex mx-auto container">
              <div className="md:ml-[50px] ml-[100px] container">
                <button>
                  <div
                    className="flex"
                    {...getRootProps()}
                    style={{ position: "relative" }}
                  >
                    <input
                      accept="image/png, image/jpg, image/svg,"
                      {...getInputProps()}
                    />
                    <img src={"/Images/Upload Field.png"} />
                    {isDragActive && (
                      <div className="absolute inset-0 w-full h-full bg-white bg-opacity-50 flex items-center justify-center">
                        <p>Drop the file here...</p>
                      </div>
                    )}
                    {preview && (
                      <img
                        className="absolute w-full h-full object-cover"
                        src={preview as string}
                      />
                    )}
                  </div>
                </button>
              </div>

              <div className="md:ml-[100px] md:mt-[144px] mt-5">
                <span>
                  Once you have made the payment, take a screenshot of the
                  transaction and upload it here
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="md:w-[1198px] w-full h-[75px] bg-[#027AC6] my-[15px] mx-auto justify-center items-center rounded-xl"
        >
          <span className="font-semibold text-white">Submit</span>
        </button>
      </form>
    </div>
  );
}
