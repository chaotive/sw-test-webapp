import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import Button from 'react-bootstrap/Button'
import {IPaginable} from '../../typings/traits'

export const loadingFragment = <Row><Col>Loading...</Col></Row>

export const headerFragment = <Row>
  <Col>Ships page X</Col>
</Row>

export const pagingButtonsFragment: React.FC<IPaginable> = props => <Row>
  <Col><Button onClick={props.goBack}>Back</Button></Col>
  <Col><Button className="float-right" onClick={props.goForward}>Forward</Button></Col>
</Row>
