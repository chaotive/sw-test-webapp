import ReactDOM from 'react-dom'
import {loadingFragment} from './fragments'
import renderer from 'react-test-renderer'

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
