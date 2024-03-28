import {ReactNode} from "react";
import styles from './layout.module.scss'

type LayoutType = {
    children: ReactNode
}

export const Layout = ({children}: LayoutType) => {
    return(
        <div className={styles.layout}>{children}</div>
    )
}