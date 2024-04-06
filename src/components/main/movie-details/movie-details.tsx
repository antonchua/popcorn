import { movieApi } from '../../../api/movie-api'
import { observer } from 'mobx-react-lite'
import { starStore } from './star-store'
import { StarItem } from './star-item'
import styles from './movie-details.module.scss'

export const MovieDetails = observer(() => {
  const { movieDetailsData } = movieApi

  return (
    <div className={styles.movieWrapper}>
      <div className={styles.detailsContainer}>
        <img src={movieDetailsData?.Poster} alt={movieDetailsData?.Title} />
        <div className={styles.details__description}>
          <h3>{movieDetailsData?.Title}</h3>
          <p>
            {movieDetailsData?.DVD} * {movieDetailsData?.Runtime}
          </p>
          <p>{movieDetailsData?.Genre}</p>
          <div className={styles.description__rating}>
            <div className={styles.description__star}></div>
            <div>{movieDetailsData?.imdbRating} IMDb rating</div>
          </div>
        </div>
      </div>
      <div className={styles.storyContainer}>
        <div className={styles.userRating}>
          <ul className={styles.userRating__stars}>
            {starStore.starContainer.map((item) => {
              return <StarItem key={item.id} item={item} />
            })}
            <div>{starStore.starQuantity}</div>
          </ul>
          <button className={styles.userRating__button} onClick={() => starStore.buttonHandler()}>
            <div>+Add to list</div>
          </button>
        </div>
        <div className={styles.storyDescription}>
          <p>{movieDetailsData?.Plot}</p>
          <p>{movieDetailsData?.Actors}</p>
          <p>{movieDetailsData?.Writer}</p>
        </div>
      </div>
    </div>
  )
})
