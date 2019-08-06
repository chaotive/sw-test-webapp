import React from 'react'
import ReactDOM from 'react-dom'
import {IPaginable} from '../../typings/traits'
import PagingButtons from './PagingButtons'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const testData: IPaginable = {
    goBack: () => undefined,
    goForward: () => undefined,
    state: {
      previousPage: 'someUrl',
      nextPage: 'anotherUrl'
    }
  }

  const div = document.createElement('div')
  ReactDOM.render(<PagingButtons {...testData} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly for empty state property in props', () => {
  const testData: IPaginable = {
    goBack: () => undefined,
    goForward: () => undefined,
    state: {}
  }

  const tree = renderer
    .create(<PagingButtons {...testData} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly for existing state property in props', () => {
  const testData: IPaginable = {
    goBack: () => undefined,
    goForward: () => undefined,
    state: {
      previousPage: 'someUrl',
      nextPage: 'anotherUrl'
    }
  }

  const tree = renderer
    .create(<PagingButtons {...testData} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
