import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import React from "react";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string | number | Date;
  placeholder?: string;
};

function FormInput({
  name,
  type,
  label,
  defaultValue,
  placeholder,
}: FormInputProps) {
  return (
    <div>
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        type={type}
        name={name}
        id={name}
        defaultValue={
          defaultValue instanceof Date
            ? defaultValue.toISOString().split("T")[0]
            : defaultValue
        }
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormInput;
