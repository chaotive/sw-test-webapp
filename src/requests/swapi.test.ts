import {retrieveStarships} from './swapi'

describe('retrieveStarships', () => {
  it('needs to be defined', () => {
    expect(retrieveStarships('3')).toBeDefined()
  })
})
