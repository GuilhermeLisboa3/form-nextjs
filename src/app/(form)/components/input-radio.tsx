"use client"
import { useFormContext } from "react-hook-form"

type InputRadioProps = {
  name: string
  id: string
  labelText: string
  value: string
}

export const InputRadio = ({ id, name, labelText, value }: InputRadioProps) => {
  const { register } = useFormContext()
  return (
    <>
      <input type="radio" id={id} {...register(name, { required: true })} value={value}/>
      <label htmlFor={id}>{labelText}</label>
    </>
  )
}
