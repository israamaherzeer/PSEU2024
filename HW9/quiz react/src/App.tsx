
import './App.css'
import { questionsList } from './types'
import {  useState } from 'react'
import Question from './component/question/Question';

function App() {

  const questionlist: questionsList[] = [

    {
      "question": "What is the derivative of 3x² + 5x - 2?",
      "correct_answer": "6x + 5",
      "answers": ["6x + 5", "6x - 5", "5x + 6", "3x + 5"]
    },
    {
      "question": "What is the integral of x³?",
      "correct_answer": "x⁴ / 4 + C",
      "answers": ["x³ / 3 + C", "x⁴ / 4 + C", "x⁵ / 5 + C", "x² / 2 + C"]
    },
    {
      "question": "What is the solution to the quadratic equation x² - 5x + 6 = 0?",
      "correct_answer": "x = 2, 3",
      "answers": ["x = 1, 6", "x = -2, -3", "x = 2, 3", "x = 0, 6"]
    },
    {
      "question": "What is the determinant of the matrix [[2, 4], [3, 5]]?",
      "correct_answer": "-2",
      "answers": ["-2", "2", "6", "-6"]
    },
    {
      "question": "What is the value of sin(45°)?",
      "correct_answer": "√2 / 2",
      "answers": ["√2 / 2", "1/2", "1", "√3 / 2"]
    },
    {
      "question": "What is the sum of the infinite geometric series 5 + 2.5 + 1.25 + ...?",
      "correct_answer": "10",
      "answers": ["8", "10", "12", "15"]
    },
    {
      "question": "What is the value of log(1000)?",
      "correct_answer": "3",
      "answers": ["3", "2", "4", "5"]
    },
    {
      "question": "What is the area of a circle with radius 7?",
      "correct_answer": "49π",
      "answers": ["42π", "49π", "7π", "14π"]
    },
    {
      "question": "What is the solution to the system of equations: x + y = 10, x - y = 2?",
      "correct_answer": "x = 6, y = 4",
      "answers": ["x = 6, y = 4", "x = 5, y = 5", "x = 8, y = 2", "x = 7, y = 3"]
    },
    {
      "question": "What is the sum of the first 20 prime numbers?",
      "correct_answer": "639",
      "answers": ["637", "625", "550", "639"]
    },
  ]
  
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizstatus, setQuizstatus] = useState("Start");
  const [score, setScore] = useState(0);
  
  const question = questionlist[questionIndex];
  const startquiz = () => {
    setQuizstatus("In progress");
    setScore(0);
    setQuestionIndex(0);
  };

  const nextquestion = (selected: boolean, isCorrect: boolean|null) => {
    if (selected) setQuestionIndex(questionIndex + 1)
      
    if (selected && isCorrect)
    {
      setScore(score + 1);
    }
    if (questionIndex === questionlist.length - 1)
    {
      setQuizstatus("Complete")
    }
  }
const restart = () => {
  setQuestionIndex(0);
  setScore(0);
  setQuizstatus("In progress");
};

return (
  <>
    {quizstatus === "Start" && (
      <div className='smallContainer container'>
        <h1>Welcome!</h1>
        <button onClick={startquiz} className='start button'>Start Quiz</button>
      </div>
    )}

    {quizstatus === "In progress" && (
      <div className=' quizContainer container '>
        <div >Question {questionIndex + 1} of {questionlist.length}</div>
        <Question data={question} next={nextquestion} />
      </div>
    )}

    {quizstatus === "Complete" && (
      <div className='smallContainer container'>
        <h1>Quiz completed</h1>
        <h1>Your score: {score} / {questionlist.length}</h1>
        <button onClick={restart} className='restart button'>Restart</button>
      </div>
    )}
  </>
);

  }

export default App
