import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import { ActionMeta, components } from "react-select";
import { Control, Controller, FieldError, Path, RegisterOptions, UseControllerProps } from "react-hook-form";

const Input = (props:any) => <components.Input {...props} isHidden={false} contentEditable={true}/>;
const loadOptions = (inputValue: string, callback: (options: any) => void, path:string) => {
  fetch(`/api/const/${path}?data=${inputValue}`)
    .then((res) => res.json())
    .then((res) => callback(res))
    .catch((e) => callback([]));
};

const FuzzyReactSelect = () => {
  const [fuse, setFuse] = useState(null);
  const [value, setValue] = useState();
  const [inputValue, setInputValue] = useState("");

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      components={{ Input }}
    />
  );
};

interface FormInputControllerProps<T> {
  name: Path<T>;
  defaultValue?: string;
  rules?: RegisterOptions;
  error?: FieldError;
  control: Control<T>;
}

interface Props<T> extends FormInputControllerProps<T> {
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  onSelected?: (value: string) => void;
  errorMsg?: string;
  className?: string;
  path:string;
  multi?:boolean,
  type?:string,
}

export const FuzzySelectControl = <T,>({
  isDisabled = false,
  name,
  path,
  className,
  onSelected,
  ...props
}: Props<T>) => {

  return (
    <>
      <Controller
        name={name}
        control={props.control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <>
            <AsyncSelect
                className="abc"
                classNamePrefix={"abc"}
              {...field}
              cacheOptions
              defaultOptions
              loadOptions={(inputValue, callback)=>{
                  loadOptions(inputValue, callback,path)}}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
                Input,
              }}
              isDisabled={field.disabled}
              isMulti={props.multi}
              {...props}
            />

            <span className="text-red-600">
              {fieldState.invalid && <p>{"required"}</p>}
            </span>
          </>
        )}
      />
    </>
  );
}

export default FuzzyReactSelect;
