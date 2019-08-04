import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Starship} from '../../typings/swapi/starships'

const StarshipCapsule: React.FC<Starship> = props => <Row>
  <Col>{props.name}</Col>
  <Col>{props.model}</Col>
</Row>

export default StarshipCapsule