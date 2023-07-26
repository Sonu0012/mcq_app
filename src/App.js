import { Container } from 'react-bootstrap'
import './App.css'
import Header from './components/Header'
import Question from './components/Question'
import { useState } from 'react'
import questions from './questions'
import Progress from './components/Progress'
import Congrats from './components/Congrats'

import Footer from './components/Footer'
import MarksProgress from './components/MarksProgress'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showNextButton, setShowNextButton] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState('Neutral')
  const [correctQuestions, setCorrectQuestions] = useState(0)
  const [totalAttempted, setTotalAttempted] = useState(0)

  const checkAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex]
    if (selectedAnswer === currentQuestion.correct_answer) {
      setCorrectAnswer('Correct')
      setShowNextButton(true)
      setCorrectQuestions(correctQuestions + 1)
    } else {
      setCorrectAnswer('Incorrect')
      setShowNextButton(true)
    }
    setTotalAttempted(totalAttempted + 1)
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

      {currentQuestionIndex < questions.length ? (
        <div>
          <Progress
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
          />
          <Container className='p-3 d-flex justify-content-center'>
            <Question
              question={questions[currentQuestionIndex]}
              index={currentQuestionIndex + 1}
              showNext={showNextButton}
              checkAnswer={checkAnswer}
              correctAnswer={correctAnswer}
              selectedAnswer={selectedAnswer}
              handleChoiceChange={handleChoiceChange}
              nextQuestion={nextQuestion}
            />
          </Container>
        </div>
      ) : (
        <Congrats />
      )}

      <MarksProgress
        correctQuestions={correctQuestions}
        currentIndex={totalAttempted}
        totalQuestions={questions.length}
      />

      <Footer />
    </div>
  )
}

export default App
