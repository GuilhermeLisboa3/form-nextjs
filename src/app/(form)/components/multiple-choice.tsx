'use client'
import { useState } from "react"

type MultipleChoice = {
  id: string
  inputName: string
  labelText: string
}

export const MultipleChoice = ({ inputName, labelText, id }: MultipleChoice) => {
  const [active, setActive] = useState(false)
  return (
    <p className="flex flex-col">
      <input type="checkbox" name={inputName} id={id} className="invisible"/>
      <label onClick={() => setActive(!active)} htmlFor={id} className={`border ${active ? 'border-gray-800': 'border-gray-light'}  py-2 px-4 rounded-full cursor-pointer text-xs`}>
        {labelText}
      </label>
    </p>
  );
}
