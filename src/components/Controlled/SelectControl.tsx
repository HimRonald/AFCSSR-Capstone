import React, { EventHandler } from "react";
import { Control, Controller } from "react-hook-form";

interface InputControlProps {
  control: Control<any>;
  label: string;
  name: string;
  type: string;
  placeholder?:string;
  options: { label: string; value: string }[];
  onSelected?: React.Dispatch<React.SetStateAction<string>>,
}

export default function SelectControl({
  control,
 onSelected,
  label,
  name,
  options,
  placeholder,
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
            <select
              onChange={(e) => {onChange(value);
                 onSelected?.(e.target.value);
              }}
              className="h-[56px] rounded-xl mt-[7px]"
            >
              <option hidden label=" ">{placeholder}</option>
              {options.map((item, index) => (
                <option key={name+index} value={item.value}>{item.label}</option>
              ))}
            </select>
            {error && <span className="error-message">{error.message}</span>}
          </div>
        </div>
      )}
    />
  );
}
