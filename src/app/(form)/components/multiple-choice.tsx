'use client'
import { useState } from "react"
import { useFormContext } from "react-hook-form"

type MultipleChoice = {
  id: string
  inputName: string
  labelText: string
  value: string
}

export const MultipleChoice = ({ inputName, labelText, id, value }: MultipleChoice) => {
  const [active, setActive] = useState(false)
  const { register } = useFormContext()
  return (
    <p className="flex flex-col">
      <input type="checkbox" {...register(inputName, { required: true})} id={id} value={value} className="invisible"/>
      <label onClick={() => setActive(!active)} htmlFor={id} className={`border ${active ? 'border-gray-800': 'border-gray-light'}  py-2 px-4 rounded-full cursor-pointer text-xs`}>
        {labelText}
      </label>
    </p>
  );
}
