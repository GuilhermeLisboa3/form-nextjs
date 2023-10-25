import { twMerge } from "tailwind-merge";

type TextAreaProps = {
  placeholder: string
  className?: string
}

export const TextArea = ({ placeholder, className}: TextAreaProps) => {
  return (
    <textarea className={twMerge('border border-gray-light rounded-sm p-4 resize-none', className)} placeholder={placeholder} />
  );
}
