import ReactDOM from 'react-dom'
import {loadingFragment} from './fragments'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(loadingFragment, div)
    ReactDOM.unmountComponentAtNode(div)
})
