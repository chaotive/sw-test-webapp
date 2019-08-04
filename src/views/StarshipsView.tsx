import React from 'react'
import Container from 'react-bootstrap/Container'
import {Starship} from '../../typings/swapi/starships'
import {loadingFragment} from '../components/fragments'
import {retrieveStarships} from '../requests/swapi'
import StarshipCapsule from '../components/StarshipCapsule'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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

const renderHeader = () => <Row>
  <Col>Ships page X</Col>
</Row>

const renderFooter = (c: StarshipsView) => <Row>
  <Col><Button onClick={c.goBack.bind(c)}>Back</Button></Col>
  <Col><Button className="float-right" onClick={c.goForward.bind(c)}>Forward</Button></Col>
</Row>

const renderStarships = (c: StarshipsView) => c.state.starships.map((s, i)=> <StarshipCapsule key={i} {...s}/>)

export default class StarshipsView extends React.Component<{}, IStarshipsViewState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      starships: []
    }
  }

  public goBack = () => updateData(this, this.state.previousPage)
  public goForward = () => updateData(this, this.state.nextPage)

  public componentWillMount = () => updateData(this)

  public render() {
    console.log('render', this)
    return <Container>
      {renderHeader()}
      {this.state.loaded ? renderStarships(this) : loadingFragment}
      {renderFooter(this)}
    </Container>
  }
}
