import { PopcornTypes } from '../../../../store/popcorn-types'
import { movieApi } from '../../../../api/movie-api'
import { observer } from 'mobx-react-lite'
import styles from './search-item.module.scss'

type SearchItemType = {
  movie: PopcornTypes.MovieTypeByTitle
}

export const SearchItem = observer(({movie}: SearchItemType) => {
  return (
    <li className={styles.item} onClick={() => movieApi.getMovieInfo(movie.imdbID)} role={'presentation'}>
      <img src={movie.Poster} alt='poster' />
      <div>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </li>
  )
})