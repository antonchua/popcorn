import {SummaryItem} from './summary-item/summary-item'
import { movieApi } from '../../../api/movie-api'

export const SummaryList = () => {
  return (
    <ul>
      {movieApi.ratedMovie.map(item =>  <SummaryItem key={item.imdbID} item={item}/>)}
    </ul>
  )
}