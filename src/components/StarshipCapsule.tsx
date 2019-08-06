import React from 'react'
import {Starship} from '../../typings/swapi/starships'
import Card from 'react-bootstrap/Card'
import {firstCapitalLetter, scaleToPercentaje, zeroAsNone} from '../helpers/formatters'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export interface IStarshipCapsule extends Partial<Starship> {
    name: string
    crew: string
    passengers: string
    hyperdrive_rating: string
}

const hrFormat = (value: string) => value === 'unknown' ? 0 : scaleToPercentaje(value, 0, 5)

const StarshipCapsule: React.FC<IStarshipCapsule> = props => {
  const {name, crew, passengers, hyperdrive_rating} = props
  return <Card className="m-4"><Card.Body>
    <div><strong>Name: {firstCapitalLetter(name)}</strong></div>
    <div>Crew: {zeroAsNone(crew)}</div>
    <div>Passengers: {zeroAsNone(passengers)}</div>
    <Row>
      <Col md="auto">Hyperdrive Class:</Col>
      <Col className="align-self-center"><ProgressBar animated now={hrFormat(hyperdrive_rating)} /></Col>
    </Row>
  </Card.Body></Card>
}

export default StarshipCapsule
