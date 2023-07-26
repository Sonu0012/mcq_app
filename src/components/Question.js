import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const Question = ({
  question,
  index,
  showNext,
  checkAnswer,
  selectedAnswer,
  handleChoiceChange,
  nextQuestion,
}) => {
  const [choices, setChoices] = useState([])
  useEffect(() => {
    const newChoices = question.incorrect_answers
    newChoices.push(question.correct_answer)
    setChoices(newChoices)
  }, [question])
  return (
    <Card style={{ width: '180rem' }}>
      <Card.Body>
        <Badge bg='dark' className='text-white mb-3'>
          Question : {index}
        </Badge>
        <Card.Title>{decodeURIComponent(question.question)}</Card.Title>
        <Card.Subtitle className='mb-2 mt-2 text-muted'>
          Difficulty :{' '}
          {question.difficulty === 'hard'
            ? '⭐'.repeat(5)
            : question.difficulty === 'medium'
            ? '⭐'.repeat(3)
            : '⭐'.repeat(1)}
        </Card.Subtitle>
        <Card.Text>
          {choices.map((choice, index) => (
            <div className='p-2 d-flex justify-content-start' key={index}>
              <input
                type='radio'
                name='answer'
                className='me-2'
                value={choice}
                checked={selectedAnswer === choice}
                onChange={handleChoiceChange}
              />{' '}
              {decodeURIComponent(choice)}
            </div>
          ))}
        </Card.Text>
        <div className='d-flex justify-content-evenly'>
          <Button
            variant='success'
            className='rounded-pill'
            onClick={checkAnswer}
          >
            Submit
          </Button>
          {showNext && (
            <Button
              variant='warning'
              className='rounded-pill'
              onClick={nextQuestion}
            >
              Next Question
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default Question
