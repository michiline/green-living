import { ReactNode } from 'react'
import { Stylable } from 'utils/types'
import { SButton } from './styles'

export interface ButtonProps extends Stylable {
  children: ReactNode
  variant?: 'contained' | 'outlined'
}

const Button = ({ variant = 'contained', children }: ButtonProps) => {
  return <SButton variant={variant}>{children}</SButton>
}

export default Button
