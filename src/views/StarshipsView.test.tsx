import React from 'react'
import ReactDOM from 'react-dom'
import StarshipsView from './StarshipsView'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StarshipsView />, div)
    ReactDOM.unmountComponentAtNode(div)
})
