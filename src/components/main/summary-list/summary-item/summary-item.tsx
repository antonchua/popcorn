import styles from './summary-item.module.scss'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'

export const SummaryItem = () => {
  return (
    <li className={styles.list__item}>
      <p>img</p>
      <div>
        <h3>Movie name</h3>
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
      <button>x</button>
    </li>
  )
}