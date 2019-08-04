import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Starship} from '../typings/swapi/starships'

// const App: React.FC = () => <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.tsx</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>

interface ISwApiResource<T> {
  count: number
  next: string
  previous: string
  results: T[]
}

const StarshipCapsule: React.FC = () => <Row>
  <Col>1 of 2</Col>
  <Col>2 of 2</Col>
</Row>

const retrieveStarships = async (cb: (data: ISwApiResource<Starship>) => void, page?: string) => {
  const response = await fetch(page ? page : 'https://swapi.co/api/starships/')
  console.log(response)
  const resource: ISwApiResource<Starship> = await response.json()
  console.log(resource)
  cb(resource)
}

interface IStarshipsViewState {
  loaded?: boolean
  nextPage?: string
  previousPage?: string
  starships: Starship[]
}

const loadingFragment = <Row><Col>Loading...</Col></Row>

class StarshipsView extends React.Component<{}, IStarshipsViewState> {

  constructor(props: {}) {
    super(props)
    this.state = {
      starships: []
    }
  }

  public componentWillMount() {
    retrieveStarships(data => this.setState({
      starships: data.results,
      nextPage: data.next,
      previousPage: data.previous,
      loaded: true
    }))
  }

  public render() {

    return <Container>
      {this.state.loaded ? <StarshipCapsule /> : loadingFragment}
    </Container>
  }
}

const App: React.FC = () => <StarshipsView />

export default App
