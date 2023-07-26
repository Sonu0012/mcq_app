import { Container } from 'react-bootstrap'
import './App.css'
import Header from './components/Header'
import Question from './components/Question'
import { useState } from 'react'
import questions from './questions'
import Alert from 'react-bootstrap/Alert'
import ProgressBar from 'react-bootstrap/ProgressBar'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showNextButton, setShowNextButton] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState('Neutral')

  const checkAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex]
    if (selectedAnswer === currentQuestion.correct_answer) {
      setCorrectAnswer('Correct')
      setShowNextButton(true)
    } else {
      setCorrectAnswer('Incorrect')
    }
  }

  const handleChoiceChange = (e) => {
    setSelectedAnswer(e.target.value)
    setShowNextButton(false)
  }

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setSelectedAnswer('')
    setShowNextButton(false)
    setCorrectAnswer('Neutral')
  }

  return (
    <div className='App'>
      <Header />
      <Container className='w-70 mt-3' style={{ width: '70%' }}>
        <h5>Your Progress Bar:</h5>
        <ProgressBar>
          <ProgressBar
            animated
            variant='success'
            now={((currentQuestionIndex + 1) / questions.length) * 100}
            key={1}
          />
        </ProgressBar>
      </Container>
      {currentQuestionIndex < questions.length ? (
        <Container className='p-5 d-flex justify-content-center'>
          <Question
            question={questions[currentQuestionIndex]}
            index={currentQuestionIndex + 1}
            showNext={showNextButton}
            checkAnswer={checkAnswer}
            selectedAnswer={selectedAnswer}
            handleChoiceChange={handleChoiceChange}
            nextQuestion={nextQuestion}
          />
        </Container>
      ) : (
        <Alert variant='success' className='mt-5 p-5'>
          <Alert.Heading>Congratulations! Quiz Completed</Alert.Heading>
          <p>
            You have successfully attempted all the questions! Keep Learning
            Keep Growing with Our Platform!
          </p>
          <hr />
          <p className='mb-0'>
            Be Sure to Revise Concepts and Come Back Stronger!
          </p>
        </Alert>
      )}

      <Container className='justify-content-center w-50'>
        {correctAnswer === 'Correct' ? (
          <Alert variant='success'>
            <Alert.Heading>Correct Answer</Alert.Heading>
          </Alert>
        ) : correctAnswer === 'Incorrect' ? (
          <Alert variant='danger'>
            <Alert.Heading>Incorrect Answer. Please Try Again</Alert.Heading>
          </Alert>
        ) : (
          <></>
        )}
      </Container>

      <div className='fixed-bottom d-flex justify-content-around'>
        <div>Submitted By: Deepak Jairamani</div>
        <div>
          E-Mail :{' '}
          <a
            href='mailto:djdeepak1048@gmail.com'
            style={{ textDecoration: 'None' }}
          >
            djdeepak1048@gmail.com
          </a>
        </div>
        <div>Contact : +91-8824117220</div>
      </div>
    </div>
  )
}

export default App
