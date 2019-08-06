import React from 'react'
import {Starship} from '../../typings/swapi/starships'
import Card from 'react-bootstrap/Card'
import {firstCapitalLetter, scaleToPercentaje, zeroOrNone} from '../helpers/formatters'

export interface IStarshipCapsule extends Partial<Starship> {
    name: string
    crew: string
    passengers: string
    hyperdrive_rating: string
}

const hrFormat = (value: string) => value === 'unknown' ? 0 : scaleToPercentaje(value, 0, 5)

const StarshipCapsule: React.FC<IStarshipCapsule> = props => {
  const {name, crew, passengers, hyperdrive_rating} = props
  return <Card className="m-4">
    <Card.Body><strong>Name: {firstCapitalLetter(name)}</strong></Card.Body>
    <Card.Body>Crew: {zeroOrNone(crew)}</Card.Body>
    <Card.Body>Passengers: {zeroOrNone(passengers)}</Card.Body>
    <Card.Body>Hyperdrive Class: {hrFormat(hyperdrive_rating)}</Card.Body>
  </Card>
}

export default StarshipCapsule
