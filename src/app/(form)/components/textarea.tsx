"use client"
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type TextAreaProps = {
  placeholder: string
  className?: string,
  nameValidate: string
}

export const TextArea = ({ placeholder, className, nameValidate}: TextAreaProps) => {
  const { register } = useFormContext()
  return (
    <textarea {...register(nameValidate, { required: true })} className={twMerge('border border-gray-light rounded-sm p-4 resize-none', className)} placeholder={placeholder} />
  );
}
