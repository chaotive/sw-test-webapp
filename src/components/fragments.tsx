import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import Button from 'react-bootstrap/Button'
import {IPaginable} from '../../typings/traits'

export const loadingFragment = <Row><Col>Loading...</Col></Row>

export const titleFragment = (text: string) => <Row>
  <Col as="h1">{text}</Col>
</Row>

export const pagingButtonsFragment: React.FC<IPaginable> = props => <Row>
  <Col><Button disabled={!props.state.previousPage} onClick={props.goBack}>Back</Button></Col>
  <Col><Button disabled={!props.state.nextPage} className="float-right" onClick={props.goForward}>Forward</Button></Col>
</Row>
