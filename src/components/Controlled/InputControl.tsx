import React from "react";
import { Control, Controller } from "react-hook-form";

interface InputControlProps {
  control: Control<any>;
  label: string;
  name: string;
  type: string;
}

export default function InputControl({
  control,
  label,
  type,
  name,
}: InputControlProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur, ref },
        fieldState: { error },
      }) => (
        <div className="w-full flex flex-wrap mx-auto md:mt-[25px] mb-[25px]">
          <div className="flex flex-col w-full md:w-[1114px] md:ml-[60px]">
            <label htmlFor="" className="font-semibold">
              {label} <span className="text-red-500">*</span>
            </label>
            <input
              type={type}
              className="h-[56px] rounded-xl mt-[7px]"
              onChange={onChange}
            />
            {error && <span className="error-message">{error.message}</span>}
          </div>
        </div>
      )}
    />
  );
}
