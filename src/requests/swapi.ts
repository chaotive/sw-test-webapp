import {Starship} from '../../typings/swapi/starships'

export interface ISwApiResource<T> {
  count: number
  next: string
  previous: string
  results: T[]
}

export const retrieveStarships = async (page?: string): Promise<ISwApiResource<Starship>> => {
  const response = await fetch(page ? page : 'https://swapi.co/api/starships/')
  console.debug(response)
  return response.json()
}
