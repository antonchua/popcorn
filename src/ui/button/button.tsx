import styles from './button.module.scss'
import { ReactNode } from 'react'

type ButtonType = {
  children: ReactNode
  type: 'button' | 'submit' | 'reset'
  cnButton: 'remove' | 'toggle'
  disabled?: boolean
  onClick?: () => void
}

export const Button = ({ children, type, cnButton, disabled, onClick }: ButtonType) => {
  return (
    <button className={styles[cnButton]} type={type || 'button'} disabled={disabled || false} onClick={onClick}>
      {children}
    </button>
  )
}
