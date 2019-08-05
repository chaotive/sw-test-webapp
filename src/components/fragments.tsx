import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

export const loadingFragment = <Row><Col className="text-center m-4">
  <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>
</Col></Row>

export const titleFragment = (text: string) => <Row>
  <Col as="h1">{text}</Col>
</Row>
