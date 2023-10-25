type InputCheckProps = {
  name: string
  id: string
  labelText: string
  value: string
}

export const InputCheck = ({ id, name, labelText, value }: InputCheckProps) => {
  return (
    <>
      <input type="checkbox" id={id} name={name} value={value}/>
      <label className="text-sm" htmlFor={id}>{labelText}</label>
    </>
  )
}
