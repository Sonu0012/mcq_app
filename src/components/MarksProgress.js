import React from 'react'
import { Container } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'

const MarksProgress = ({ correctQuestions, currentIndex, totalQuestions }) => {
  return (
    <Container style={{ width: '70%' }} className='mt-3'>
      <h5>Score : {(correctQuestions / totalQuestions) * 100} % </h5>
      <ProgressBar>
        <ProgressBar
          striped
          variant='success'
          now={(correctQuestions / totalQuestions) * 100}
          key={1}
        />
        <ProgressBar
          variant='danger'
          now={((currentIndex - correctQuestions) / totalQuestions) * 100}
          key={2}
        />
      </ProgressBar>
    </Container>
  )
}

export default MarksProgress
