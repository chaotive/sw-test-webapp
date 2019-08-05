import React from 'react'
import ReactDOM from 'react-dom'
import StarshipCapsule, {IStarshipCapsule} from './StarshipCapsule'

it('renders without crashing', () => {
    const testData: IStarshipCapsule = {
        name: 'testShip',
        crew: '5',
        passengers: 'some',
        hyperdrive_rating: '0.1'
    }

    const div = document.createElement('div')
    ReactDOM.render(<StarshipCapsule {...testData} />, div)
    ReactDOM.unmountComponentAtNode(div)
})
