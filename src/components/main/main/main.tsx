import { RiMovieFill } from 'react-icons/ri'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import { SummaryList } from '../summary-list/summary-list'
import { Box } from '../box/box'
import { Button } from '../../../ui/button/button'
import { SearchList } from '../search-list/search-list'
import { movieApi } from '../../../api/movie-api'
import { observer } from 'mobx-react-lite'
import {MovieDetails} from '../movie-details/movie-details'
import styles from './main.module.scss'

export const Main = observer(() => {
  const { isLoading, error, errorMessage } = movieApi.status
  const isActive = movieApi.isInfoActive
  return (
    <main className={styles.main}>
      <Box>
        <Button type={'button'} cnButton={'toggle'} disabled={false}>
          +
        </Button>
        {isLoading && <h3 className={styles.loading}>Loading...</h3>}
        {error && <h3 className={styles.error}>{errorMessage}</h3>}
        {!isLoading && !error && <SearchList />}
      </Box>
      <Box>
        <Button type={'button'} cnButton={'toggle'} disabled={false}>-</Button>
        {isActive && <MovieDetails/>}
        {!isActive && (
          <>
            <div className={styles.summary}>
              <h3>movies you watched</h3>
              <ul>
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
            </div>
            <SummaryList />
          </>
        )}
      </Box>
    </main>
  )
})
