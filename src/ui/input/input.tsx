import styles from './input.module.scss'
import { ChangeEvent } from 'react'

type InputType = {
  type: string
  id: string
  value: string
  placeholder?: string
  autocomplete: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ type, id, placeholder, autocomplete, onChange, value }: InputType) => {
  return (
    <>
      <label htmlFor={id}></label>
      <input
        className={styles.input}
        type={type}
        id={id}
        placeholder={placeholder}
        autoComplete={autocomplete}
        value={value}
        onChange={onChange}
      />
    </>
  )
}
