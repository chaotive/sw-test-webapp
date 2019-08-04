import React from 'react'
import Container from 'react-bootstrap/Container'
import {Starship} from '../../typings/swapi/starships'
import {loadingFragment, pagingButtonsFragment, headerFragment} from '../components/fragments'
import {retrieveStarships} from '../requests/swapi'
import StarshipCapsule from '../components/StarshipCapsule'
import {IPaginable} from '../../typings/traits'

interface IStarshipsViewState {
  loaded?: boolean
  nextPage?: string
  previousPage?: string
  starships: Starship[]
}

function updateData(c: StarshipsView, page?: string) {
  c.setState({loaded: false})
  retrieveStarships(page)
    .then(data => c.setState({
      starships: data.results,
      nextPage: data.next,
      previousPage: data.previous,
      loaded: true
    }))
}

const renderStarships = (c: StarshipsView) => c.state.starships.map((s, i)=> <StarshipCapsule key={i} {...s}/>)
const goBack = (c: StarshipsView) => updateData(c, c.state.previousPage)
const goForward = (c: StarshipsView) => updateData(c, c.state.nextPage)

export default class StarshipsView extends React.Component<{}, IStarshipsViewState> implements IPaginable {
  constructor(props: {}) {
    super(props)
    this.state = { starships: [] }
  }

  public goBack = () => goBack(this)
  public goForward = () => goForward(this)
  public componentWillMount = () => updateData(this)

  public render() {
    console.log('render', this)
    return <Container>
      {headerFragment}
      {this.state.loaded ? renderStarships(this) : loadingFragment}
      {pagingButtonsFragment(this)}
    </Container>
  }
}
