import {SearchItem} from './search-item/search-item'
import { observer } from 'mobx-react-lite'
import { movieApi } from '../../../api/movie-api'

export const SearchList = observer(() => {

  return (
    <ul>
      {movieApi.movieData?.map(item =>  <SearchItem key={item.imdbID} movie={item}/>)}
    </ul>
  )
})