import { observable, action, makeObservable, computed } from 'mobx'
import { PopcornTypes } from '../store/popcorn-types'

type PromiseStatus = {
  isLoading: boolean
  error: boolean
  errorMessage: string
}
export type MovieInfo = {
  Title: string
  DVD: string
  Runtime: string
  Genre: string
  imdbRating: string
  Plot: string
  Writer: string
  Actors: string
  imdbID: string
  Poster: string
}

class MovieApi {
  @observable.ref
  movieData: PopcornTypes.MovieTypeByTitle[] = []
  @observable.ref
  movieDetailsData: MovieInfo | null = null
  @observable.ref
  ratedMovie: PopcornTypes.RatedMovie[] = []
  @observable
  status: PromiseStatus = {
    isLoading: false,
    error: false,
    errorMessage: '',
  }
  @observable
  infoStatus: PromiseStatus = {
    isLoading: false,
    error: false,
    errorMessage: '',
  }
  KEY = 'acc5d6f'
  constructor() {
    makeObservable(this)
  }

  @action
  addRatedMovie(rate: number): void {
    if (this.movieDetailsData){
      this.ratedMovie.push({...this.movieDetailsData, userRate: rate})
    }
    this.clearMovieInfo()
  }
  @action
  async getMovie(query: string): Promise<void> {
    this.status.isLoading = true
    this.status.errorMessage = ''
    this.status.error = false
    try {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${this.KEY}&s=${query}`)
      const data: PopcornTypes.MoviePromiseType = await res.json()
      this.movieData = data.Search
    } catch (e) {
      if (e instanceof Error) {
        this.status.error = true
        this.status.errorMessage = e.message
        console.log(e.message)
      }
    } finally {
      this.status.isLoading = false
    }
  }
  @action
  async getMovieInfo(id: string): Promise<void> {
    this.infoStatus.isLoading = true
    try {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${this.KEY}&i=${id}`)
      const movie = await res.json()
      this.movieDetailsData = this.transformMovieInfo(movie)
    } catch (e) {
      if (e instanceof Error) {
        this.infoStatus.error = true
        this.infoStatus.errorMessage = e.message
        console.log(e.message)
      }
    } finally {
      this.infoStatus.isLoading = false
    }
  }
  private transformMovieInfo(movie: PopcornTypes.MovieTypeById): MovieInfo {
    return {
      Title: movie.Title,
      Actors: movie.Actors,
      imdbRating: movie.imdbRating,
      imdbID: movie.imdbID,
      DVD: movie.DVD,
      Genre: movie.Genre,
      Plot: movie.Plot,
      Runtime: movie.Runtime,
      Writer: movie.Writer,
      Poster: movie.Poster,
    }
  }
  @action
  clearMovieInfo(): void {
    this.movieDetailsData = null
  }
  @computed
  get isInfoActive(): boolean {
    return !!this.movieDetailsData
  }
}

export const movieApi = new MovieApi()
