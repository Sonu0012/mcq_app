import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Row className='fixed-bottom d-flex justify-content-around bg-dark text-white p-2'>
      <Col md={6}>Submitted By: Deepak Jairamani</Col>
      <Col md={6}>
        E-Mail :{' '}
        <a
          href='mailto:djdeepak1048@gmail.com'
          style={{ textDecoration: 'None', color: 'White' }}
        >
          djdeepak1048@gmail.com
        </a>
      </Col>
    </Row>
  )
}

export default Footer
