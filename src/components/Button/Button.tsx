import React from 'react'

export interface ButtonProps {
  label: string
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <div>
      <button>{label}</button>
    </div>
  )
}

export default Button
