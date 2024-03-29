import {FoundResults} from "../found-results/found-results";
import {Input} from '../ui/input/input'
import { BiCameraMovie } from "react-icons/bi";
import styles from './header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <h3><BiCameraMovie className={styles.logo}/> popcorn</h3>
            <div>
                <Input type={'search'} id={'search'} placeholder={'Search movies...'} autocomplete={'off'}/>
            </div>
            <FoundResults/>
        </header>
    )
}