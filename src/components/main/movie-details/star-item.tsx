import { starStore } from './star-store'
import { StarContainerType } from './star-store'
import { observer } from 'mobx-react-lite'
import cx from 'classnames'
import styles from './star-item.module.scss'

type StarItemType = {
  item: StarContainerType
}
export const StarItem = observer(({ item }: StarItemType) => {
  const { id, image, isHover } = item
  return (
    <li
      className={cx(styles.star, { [styles.active]: isHover })}
      onMouseEnter={() =>  starStore.mouseEnterHandler(id)}
      onMouseLeave={() => starStore.mouseLeaveHandler()}
      onClick={() => starStore.starHandler(id)}
    >
      {image}
    </li>
  )
})
