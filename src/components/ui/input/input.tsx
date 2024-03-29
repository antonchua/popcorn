import styles from './input.module.scss'

type InputType = {
  type: string
  id: string
  placeholder?: string
  autocomplete: string
}

export const Input = ({ type, id, placeholder, autocomplete }: InputType) => {
  return (
    <>
      <label htmlFor={id}></label>
      <input className={styles.input} type={type} id={id} placeholder={placeholder} autoComplete={autocomplete} />
    </>
  )
}
