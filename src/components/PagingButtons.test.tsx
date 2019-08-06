import React from 'react'
import ReactDOM from 'react-dom'
import {IPaginable} from '../../typings/traits'
import PagingButtons from './PagingButtons'
import renderer from 'react-test-renderer'

const testData: IPaginable = {
    goBack: () => '',
    goForward: () => '',
    state: {}
}

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<PagingButtons {...testData} />, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
    const tree = renderer
      .create(<PagingButtons {...testData} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
})
