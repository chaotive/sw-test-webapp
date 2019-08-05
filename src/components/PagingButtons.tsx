import React from 'react'
import {IPaginable} from '../../typings/traits'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const PagingButtons: React.FC<IPaginable> = props => <Row>
  <Col><Button disabled={!props.state.previousPage} onClick={props.goBack}>Back</Button></Col>
  <Col><Button disabled={!props.state.nextPage} className="float-right" onClick={props.goForward}>Forward</Button></Col>
</Row>

export default PagingButtons
