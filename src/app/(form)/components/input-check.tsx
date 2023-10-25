import { useFormContext } from "react-hook-form"

type InputCheckProps = {
  name: string
  id: string
  labelText: string
  value: string
}

export const InputCheck = ({ id, name, labelText, value }: InputCheckProps) => {
  const { register } = useFormContext()
  return (
    <>
      <input type="checkbox" id={id} {...register(name, { required: true})} value={value}/>
      <label className="text-sm" htmlFor={id}>{labelText}</label>
    </>
  )
}
