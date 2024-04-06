import { FaRegStar, FaStar } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import { Button } from '../../../../ui/button/button'
import { PopcornTypes } from '../../../../store/popcorn-types'
import styles from './summary-item.module.scss'

type SummaryItemType = {
  item: PopcornTypes.RatedMovie
}
export const SummaryItem = ({ item }: SummaryItemType) => {
  return (
    <li className={styles.item}>
      <img src={item.Poster} alt={item.Title} />
      <div>
        <h3>{item.Title}</h3>
        <ul>
          <li>
            <FaRegStar style={{ color: 'gold' }} />
            <span> {item.imdbRating}</span>
          </li>
          <li>
            <FaStar style={{ color: 'gold' }} />
            <span> {item.userRate}</span>
          </li>
          <li>
            <IoMdTime style={{ color: 'orange' }} />
            <span> {item.Runtime}</span>
          </li>
        </ul>
      </div>
      <Button type={'button'} cnButton={'remove'}>
        x
      </Button>
    </li>
  )
}
