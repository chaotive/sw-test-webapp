import React from 'react'
import {Starship} from '../../typings/swapi/starships'
import Card from 'react-bootstrap/Card'

const StarshipCapsule: React.FC<Starship> = props => <Card className="m-4">
  <Card.Body><strong>{props.name}</strong></Card.Body>
  <Card.Body>{props.crew}</Card.Body>
  <Card.Body>{props.passengers}</Card.Body>
  <Card.Body>{props.hyperdrive_rating}</Card.Body>
</Card>

export default StarshipCapsule
