import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

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
        <div className='d-flex justify-content-between'>
          <Badge bg='dark' className='text-white mb-2'>
            Question : {index}
          </Badge>

          <Card.Subtitle>
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
        </Card.Text>
        <div className='d-flex justify-content-around'>
          <div>
            {showNext ? (
              <Button
                variant='dark'
                className='rounded-pill'
                onClick={nextQuestion}
              >
                Next Question
              </Button>
            ) : (
              <Button
                variant='success'
                className='rounded-pill'
                onClick={check}
              >
                Submit
              </Button>
            )}
          </div>
          <div>
            {correctAnswer === 'Correct' ? (
              <h3>
                <Badge bg='success'>Correct!</Badge>
              </h3>
            ) : correctAnswer === 'Incorrect' ? (
              <h3>
                {' '}
                <Badge bg='danger'>Incorrect!</Badge>{' '}
              </h3>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Question
