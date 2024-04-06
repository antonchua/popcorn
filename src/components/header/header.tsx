import { FoundResults } from '../found-results/found-results'
import { Input } from '../../ui/input/input'
import { BiCameraMovie } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { movieApi } from '../../api/movie-api'
import { observer } from 'mobx-react-lite'
import styles from './header.module.scss'


export const Header = observer(() => {
  const [query, setQuery] = useState('')
  useEffect(() => {
    const queryDelay = setTimeout(() => {
      movieApi.getMovie(query)
    }, 500)
    return () => clearTimeout(queryDelay)
  },[query])
  return (
    <header className={styles.header}>
      <h3>
        <BiCameraMovie className={styles.logo} /> popcorn
      </h3>
      <div>
        <Input
          type={'search'}
          id={'search'}
          placeholder={'Search movies...'}
          autocomplete={'off'}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <FoundResults />
    </header>
  )
})
