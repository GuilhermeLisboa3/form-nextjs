
import React from 'react'

type Props = {
  children: string | JSX.Element
  type?: 'button' | 'submit' | 'reset' | undefined
}

export const Button: React.FC<Props> = ({ children, type }): JSX.Element => {
  return (
    <>
      <button type={type} className='py-2 px-16 font-semibold bg-yellow-dark rounded-full h-14 shadow-button'>
        {children}
      </button>
    </>
  )
}
