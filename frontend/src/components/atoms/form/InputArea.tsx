import React from "react";
import { IconType } from "react-icons/lib";
import Label from "./Label";
interface InputAreaProps {
  register?: {};
  defaultValue?: string;
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  Icon?: IconType;
}

const InputArea: React.FC<InputAreaProps> = ({
  register,
  defaultValue,
  name,
  label,
  type,
  placeholder,
  Icon,
}) => {
  return (
    <>
      <Label label={label} />
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-800 focus-within:text-gray-900 sm:text-base">
              <Icon />{" "}
            </span>
          </div>
        )}
        <input
          // {...register(`${name}`, {
          //   required: `${label} is required!`,
          // })}
          defaultValue={defaultValue}
          type={type}
          placeholder={placeholder}
          name={name}
          className={
            Icon
              ? "py-2 pl-10 w-full appearance-none border-2 text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-gray-50 border-gray-200 focus:outline-none focus:border-primary h-11 md:h-12"
              : "py-2 px-4 md:px-5 w-full appearance-none border-2 text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-gray-50 border-gray-200 focus:outline-none focus:border-primary h-11 md:h-12"
          }
        />
      </div>
    </>
  );
};

export default InputArea;
