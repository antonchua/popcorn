import styles from './box.module.scss'
import { ReactNode } from 'react'

type BoxType = {
  children: ReactNode
}

export const Box = ( {children}: BoxType ) => {
  return (
    <div className={styles.box}>{children}</div>
  )
}