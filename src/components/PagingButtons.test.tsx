import React from 'react'
import ReactDOM from 'react-dom'
import {IPaginable} from '../../typings/traits'
import PagingButtons from './PagingButtons'

it('renders without crashing', () => {
    const testData: IPaginable = {
        goBack: () => '',
        goForward: () => '',
        state: {}
    }

    const div = document.createElement('div')
    ReactDOM.render(<PagingButtons {...testData} />, div)
    ReactDOM.unmountComponentAtNode(div)
})
