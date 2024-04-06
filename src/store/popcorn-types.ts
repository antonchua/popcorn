export namespace PopcornTypes {
  export type MovieTypeByTitle = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
  }
  export type MoviePromiseType = {
    Search: MovieTypeByTitle[]
    totalResults: string
    Response: string
  }
  export type PromiseStatus = {
    isLoading: boolean
    error: boolean
    errorMessage: string
  }
  export type RatedMovie = {
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
    userRate: number
  }
  export type MovieTypeById = {
    Actors: string
    Awards: string
    BoxOffice: string
    Country: string
    DVD: string
    Director: string
    Genre: string
    Language: string
    Metascore: string
    Plot: string
    Poster: string
    Production: string
    Rated: string
    Ratings: [{ Source: string; Value: string }]
    Released: string
    Response: string
    Runtime: string
    Title: string
    Type: string
    Website: string
    Writer: string
    Year: string
    imdbID: string
    imdbRating: string
    imdbVotes: string
  }
}
