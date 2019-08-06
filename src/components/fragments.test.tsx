import ReactDOM from 'react-dom'
import {loadingFragment, titleFragment} from './fragments'
import renderer from 'react-test-renderer'

describe('loadingFragment', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(loadingFragment, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders correctly', () => {
    const tree = renderer
      .create(loadingFragment)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('titleFragment', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(titleFragment('someTitle'), div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders correctly edge case', () => {
    const tree = renderer.create(titleFragment('')).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly regular case', () => {
    const tree = renderer.create(titleFragment('someTitle')).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
