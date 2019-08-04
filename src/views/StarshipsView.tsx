import React from 'react'
import Container from 'react-bootstrap/Container'
import {Starship} from '../../typings/swapi/starships'
import {loadingFragment} from '../components/fragments'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {retrieveStarships} from '../requests/swapi'

const StarshipCapsule: React.FC = () => <Row>
  <Col>1 of 2</Col>
  <Col>2 of 2</Col>
</Row>

interface IStarshipsViewState {
  loaded?: boolean
  nextPage?: string
  previousPage?: string
  starships: Starship[]
}

export default class StarshipsView extends React.Component<{}, IStarshipsViewState> {

  constructor(props: {}) {
    super(props)
    this.state = {
      starships: []
    }
  }

  private updateData(page?: string) {
    this.setState({loaded: false})
    retrieveStarships(page)
      .then(data => this.setState({
        starships: data.results,
        nextPage: data.next,
        previousPage: data.previous,
        loaded: true
       }))
  }

  public componentWillMount() {
    this.updateData()
  }

  public render() {

    return <Container>
      {this.state.loaded ? <StarshipCapsule/> : loadingFragment}
    </Container>
  }
}
