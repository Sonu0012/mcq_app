import React from 'react'
import { Alert, Container } from 'react-bootstrap'

const Congrats = () => {
  return (
    <Container>
      <Alert variant='success' className='mt-5 p-5'>
        <Alert.Heading>Congratulations! Quiz Completed</Alert.Heading>
        <p>
          You have successfully attempted all the questions! Keep Learning Keep
          Growing with Our Platform!
        </p>
        <hr />
        <p className='mb-0'>
          Be Sure to Revise Concepts and Come Back Stronger!
        </p>
      </Alert>
    </Container>
  )
}

export default Congrats
