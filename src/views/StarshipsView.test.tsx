import React from 'react'
import ReactDOM from 'react-dom'
import StarshipsView from './StarshipsView'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<StarshipsView/>, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
  const tree = renderer
    .create(<StarshipsView/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
