import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { Col, Row } from 'react-bootstrap'

const Question = ({
  question,
  index,
  showNext,
  checkAnswer,
  correctAnswer,
  selectedAnswer,
  handleChoiceChange,
  nextQuestion,
}) => {
  const [choices, setChoices] = useState([])
  const [attempted, setAttempted] = useState(false)
  useEffect(() => {
    const newChoices = question.incorrect_answers
    newChoices.push(question.correct_answer)
    setChoices(newChoices)
    setAttempted(false)
  }, [question])

  const check = () => {
    setAttempted(true)
    checkAnswer()
  }
  return (
    <Card style={{ width: '180rem' }}>
      <Card.Body>
        <div className='d-md-flex justify-content-between'>
          <Badge bg='dark' className='text-white mb-3'>
            Question : {index}
          </Badge>

          <Card.Subtitle className='mb-3'>
            Category : {decodeURIComponent(question.category)}
          </Card.Subtitle>
        </div>

        <Card.Title>{decodeURIComponent(question.question)}</Card.Title>
        <Card.Subtitle className='mb-2 mt-2 text-muted'>
          Difficulty :{' '}
          {question.difficulty === 'hard'
            ? '⭐'.repeat(3)
            : question.difficulty === 'medium'
            ? '⭐'.repeat(2) + '★'
            : '⭐'.repeat(1) + '★★'}
        </Card.Subtitle>
        <Card.Text>
          <Row>
            <Col md={6}>
              {choices.map((choice, index) => (
                <div className='p-2 d-flex justify-content-start' key={index}>
                  <input
                    type='radio'
                    name='answer'
                    className='me-2'
                    value={choice}
                    checked={selectedAnswer === choice}
                    onChange={handleChoiceChange}
                    disabled={attempted}
                  />{' '}
                  {decodeURIComponent(choice)}
                </div>
              ))}
            </Col>
            <Col
              md={6}
              className='d-flex align-items-center justify-content-center'
            >
              {correctAnswer === 'Correct' ? (
                <h2>
                  <Badge bg='success'>Correct!</Badge>
                </h2>
              ) : correctAnswer === 'Incorrect' ? (
                <h2>
                  {' '}
                  <Badge bg='danger'>Incorrect!</Badge>{' '}
                </h2>
              ) : (
                <></>
              )}
            </Col>
          </Row>
        </Card.Text>

        {showNext ? (
          <Button
            variant='dark'
            className='rounded-pill'
            onClick={nextQuestion}
          >
            Next Question
          </Button>
        ) : (
          <Button variant='success' className='rounded-pill' onClick={check}>
            Submit
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default Question
