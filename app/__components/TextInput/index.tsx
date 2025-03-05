"use client";

import { useState } from "react";
import { FieldLable } from "../FieldLabel";
import { FiledBaseProps } from "@/app/__types/FieldBaseProps";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export function TextInput({
  id,
  placeholder = "Type here...",
  labeled = true,
  required = false,
  value,
  onChange,
  labelName,
  type = "default",
}: TextInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      {labeled && (
        <FieldLable
          htmlFor={id}
          labelName={labelName as string}
          required={required}
        />
      )}
      <div className="relative">
        <input
          id={id}
          type={type === "password" && !showPassword ? "password" : "text"}
          className="block w-full px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400"
          >
            {showPassword ? (
              <EyeIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <EyeSlashIcon className="h-5 w-5 text-gray-500" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

type TextInputProps = FiledBaseProps & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "default" | "password";
};
