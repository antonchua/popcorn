import { RiMovieFill } from 'react-icons/ri'
import { FaRegStar } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import styles from './main.module.scss'

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.box}>box</div>
      <div className={styles.box}>
        <div className={styles.summary}>
          <h3>movies you watched</h3>
          <ul className={styles.summary__title}>
            <li>
              <RiMovieFill style={{ color: 'skyblue' }} /> 0 movies
            </li>
            <li>
              <FaRegStar style={{ color: 'gold' }} /> 0
            </li>
            <li>
              <FaStar style={{ color: 'gold' }} /> 0
            </li>
            <li>
              <IoMdTime style={{ color: 'orange' }} /> 0 min
            </li>
          </ul>
          <ul className={styles.summary__list}>
            <li className={styles.summary__list__item}>
              <p>img</p>
              <div>
                <h3>Mouvie name</h3>
                <ul>
                  <li>
                    <FaRegStar style={{ color: 'gold' }} /> 0
                  </li>
                  <li>
                    <FaStar style={{ color: 'gold' }} /> 0
                  </li>
                  <li>
                    <IoMdTime style={{ color: 'orange' }} /> 0 min
                  </li>
                </ul>
              </div>
              <button>X</button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
