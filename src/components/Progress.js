import { Container } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'

import React from 'react'

const Progress = ({ currentQuestionIndex, totalQuestions }) => {
  return (
    <Container className='w-70 mt-2' style={{ width: '70%' }}>
      <div className='d-flex justify-content-between'>
        <h5>Your Progress Bar:</h5>{' '}
        <h5>
          Questions : {currentQuestionIndex + 1}/{totalQuestions}{' '}
        </h5>
      </div>
      <ProgressBar>
        <ProgressBar
          animated
          variant='dark'
          now={((currentQuestionIndex + 1) / totalQuestions) * 100}
          key={1}
        />
      </ProgressBar>
    </Container>
  )
}

export default Progress
