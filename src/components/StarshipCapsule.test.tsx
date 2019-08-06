import React from 'react'
import ReactDOM from 'react-dom'
import StarshipCapsule, {IStarshipCapsule} from './StarshipCapsule'
import renderer from 'react-test-renderer'

const testData: IStarshipCapsule = {
    name: 'testShip',
    crew: '5',
    passengers: 'some',
    hyperdrive_rating: '0.1'
}

it('renders without crashing', () => {

    const div = document.createElement('div')
    ReactDOM.render(<StarshipCapsule {...testData} />, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
    const tree = renderer
      .create(<StarshipCapsule {...testData} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
})
