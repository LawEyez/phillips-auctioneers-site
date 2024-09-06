import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button