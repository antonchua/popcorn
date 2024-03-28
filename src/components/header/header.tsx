import logo from '../../accets/popcorn.png'
import styles from './header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo"/>
            <div>
                <label htmlFor="search"></label>
                <input type="search" id='search' placeholder='Search movies...'/>
            </div>
        </header>
    )
}