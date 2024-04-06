import { ReactNode } from 'react'
import { observable, action, makeObservable } from 'mobx'
import { starContainer } from "./star-container"
import { movieApi } from '../../../api/movie-api'

export type StarContainerType = {
  id: number
  image: ReactNode
  isHover: boolean
}
class StarStore {
  @observable.ref
  starContainer: StarContainerType[] = [...starContainer]
  @observable.ref
  starQuantity: number | null = null
  @observable.ref
  userRate: number = 0
  constructor() {
    makeObservable(this)
  }
  @action
  buttonHandler(): void {
    movieApi.addRatedMovie(this.userRate)
    movieApi.clearMovieInfo()
    this.userRate = 0
    this.mouseLeaveHandler()
  }
  @action
  starHandler(id: number): void {
    // movieApi.clearMovieInfo()
    const star = this.starContainer.find(item => item.id === id)
    if (star) {
      this.userRate = star.id
      this.mouseEnterHandler(id)
    }
  }
  @action
  mouseEnterHandler(id: number): void {
    const star = this.starContainer.find(item => item.id === id)
    if (star) {
      this.starContainer= this.starContainer.map(item => {
        if (star.id >= item.id){
          return  {...item, isHover: true}
        }
        return {...item, isHover: false}
      })
      this.starQuantity = star.id
    }
  }
  @action
  mouseLeaveHandler(): void {
    if (this.userRate === 0) {
      this.starContainer = this.starContainer.map(item => {
        this.starQuantity = null
        return {...item, isHover: false}
      })
    }
    if (this.userRate > 0){
      this.mouseEnterHandler(this.userRate)
    }
  }
}
export const starStore = new StarStore()