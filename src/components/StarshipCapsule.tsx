import React from 'react'
import {Starship} from '../../typings/swapi/starships'
import Card from 'react-bootstrap/Card'

const StarshipCapsule: React.FC<Starship> = props => {
  const {name, crew, passengers, hyperdrive_rating} = props
  return <Card className="m-4">
    <Card.Body><strong>Name: {name}</strong></Card.Body>
    <Card.Body>Crew: {crew}</Card.Body>
    <Card.Body>Passengers: {passengers}</Card.Body>
    <Card.Body>Hyperdrive Class: {hyperdrive_rating}</Card.Body>
  </Card>
}

export default StarshipCapsule
