import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

export default function Footer() {
  return (
     <Container fluid className='footer px-4 py-3 text-center fw-normal text-white text-captilize footer mt-3'>
        <Row>
            <Col>
               Developed By: @Developer Name
            </Col>
        </Row>
     </Container>
  )
}
