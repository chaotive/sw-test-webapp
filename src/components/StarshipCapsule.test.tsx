import React from 'react'
import ReactDOM from 'react-dom'
import StarshipCapsule, {IStarshipCapsule} from './StarshipCapsule'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const testData: IStarshipCapsule = {
    name: 'testShip',
    crew: '0',
    passengers: '10',
    hyperdrive_rating: '3.4'
  }

  const div = document.createElement('div')
  ReactDOM.render(<StarshipCapsule {...testData} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly, hyperdrive_rating as number', () => {
  const testData: IStarshipCapsule = {
    name: '123-532-M',
    crew: '5',
    passengers: 'unknown',
    hyperdrive_rating: '1'
  }

  const tree = renderer.create(<StarshipCapsule {...testData} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly, hyperdrive_rating as unknown', () => {
  const testData: IStarshipCapsule = {
    name: 'testShip',
    crew: '5',
    passengers: '4900',
    hyperdrive_rating: 'unknown'
  }

  const tree = renderer.create(<StarshipCapsule {...testData} />).toJSON()
  expect(tree).toMatchSnapshot()
})
