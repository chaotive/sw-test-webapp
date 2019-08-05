import React from 'react'
import {Starship} from '../../typings/swapi/starships'
import Card from 'react-bootstrap/Card'

export interface IStarshipCapsule extends Partial<Starship> {
    name: string
    crew: string
    passengers: string
    hyperdrive_rating: string
}

const StarshipCapsule: React.FC<IStarshipCapsule> = props => {
  const {name, crew, passengers, hyperdrive_rating} = props
  return <Card className="m-4">
    <Card.Body><strong>Name: {name}</strong></Card.Body>
    <Card.Body>Crew: {crew}</Card.Body>
    <Card.Body>Passengers: {passengers}</Card.Body>
    <Card.Body>Hyperdrive Class: {hyperdrive_rating}</Card.Body>
  </Card>
}

export default StarshipCapsule
