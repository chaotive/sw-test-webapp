import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'

export const loadingFragment = <Row><Col>Loading...</Col></Row>

export const titleFragment = (text: string) => <Row>
  <Col as="h1">{text}</Col>
</Row>
