import React from 'react'
import Container from 'react-bootstrap/Container'
import {loadingFragment, titleFragment} from '../components/fragments'
import StarshipCapsule from '../components/StarshipCapsule'
import {IPaginable} from '../../typings/traits'
import PagingButtons from '../components/PagingButtons'
import {Starship} from '../../typings/swapi/starships'
import {retrieveStarships} from '../requests/swapi'

export interface IStarshipsViewState {
  loaded?: boolean
  nextPage?: string
  previousPage?: string
  starships: Starship[]
  pageNumber: number
}

function updateState(c: StarshipsView, page?: string, pageDiff: number = 0) {
  c.setState({
    nextPage: undefined,
    previousPage: undefined,
    loaded: false,
    pageNumber: c.state.pageNumber + pageDiff
  })
  retrieveStarships(page).then(data =>
    c.setState({
      starships: data.results,
      nextPage: data.next,
      previousPage: data.previous,
      loaded: true
    })
  )
}

const renderStarships = (c: StarshipsView) => c.state.starships.map((s, i) => <StarshipCapsule key={i} {...s}/>)
const goBack = (c: StarshipsView) => updateState(c, c.state.previousPage, -1)
const goForward = (c: StarshipsView) => updateState(c,  c.state.nextPage, 1)

export default class StarshipsView extends React.Component<{}, IStarshipsViewState> implements IPaginable {
  constructor(props: {}) {
    super(props)
    this.state = {
      pageNumber: 1,
      starships: []
    }
  }

  public goBack = () => goBack(this)
  public goForward = () => goForward(this)
  public componentWillMount = () => updateState(this)

  public render() {
    const pagingButtons = <PagingButtons {...this} />
    return <Container>
      {titleFragment('STAR WARS Starships - Page ' + this.state.pageNumber)}
      {pagingButtons}
      {this.state.loaded ? renderStarships(this) : loadingFragment}
      {this.state.loaded && pagingButtons}
    </Container>
  }
}
