type InputRadioProps = {
  name: string
  id: string
  labelText: string
  value: string
}

export const InputRadio = ({ id, name, labelText, value }: InputRadioProps) => {
  return (
    <>
      <input type="radio" id={id} name={name} value={value}/>
      <label htmlFor={id}>{labelText}</label>
    </>
  )
}
