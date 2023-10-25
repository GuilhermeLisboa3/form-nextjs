type InputRadioProps = {
  name: string
  id: string
  labelName: string
  value: string
}

const InputRadio = ({ id, name, labelName, value }: InputRadioProps) => {
  return (
    <>
      <input type="radio" id={id} name={name} value={value}/>
      <label htmlFor={id}>{labelName}</label>
    </>
  )
}

export default InputRadio