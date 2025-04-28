
import './App.css'
import { actionTypes  } from './types';
import {  useEffect,  useContext} from 'react'
import Question from './component/question/Question';
 import AddQuestion from './component/AddQuestion/AddQuestion';
import {BrowserRouter,Routes,Route} from 'react-router'
import Login from './component/login/Login';
import Start from './component/StartPage/StartPage';
import Score from './component/score/Score';
import Guard from './component/Guard';

import QuizProvider, { QuizContext } from './component/provider/Provider';


// const questionlist:questions[] =  [
// {
//   "question": "What is the derivative of 3x² + 5x - 2?",
//   "correctAnswer": "6x + 5",
//   "answers": ["6x + 5", "6x - 5", "5x + 6", "3x + 5"]
// },
// {
//   "question": "What is the integral of x³?",
//   "correctAnswer": "x⁴ / 4 + C",
//   "answers": ["x³ / 3 + C", "x⁴ / 4 + C", "x⁵ / 5 + C", "x² / 2 + C"]
// },
// {
//   "question": "What is the solution to the quadratic equation x² - 5x + 6 = 0?",
//   "correctAnswer": "x = 2, 3",
//   "answers": ["x = 1, 6", "x = -2, -3", "x = 2, 3", "x = 0, 6"]
// },
// {
//   "question": "What is the determinant of the matrix [[2, 4], [3, 5]]?",
//   "correctAnswer": "-2",
//   "answers": ["-2", "2", "6", "-6"]
// },

// ]

function App() {
  const { data, dispatch } = useContext(QuizContext)


  useEffect(() => {
    //  localStorage.setItem("questionList", JSON.stringify(questionlist));
      dispatch({ type: actionTypes.Init });
    } 
    
 ,[]);

  const nextquestion = (selected: boolean, isCorrect: boolean|null) => {
    dispatch({type:actionTypes.NextQuestion , paylod : {selected , isCorrect}})

  }
 

return (
  <>
<QuizProvider>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}> </Route>
    <Route path='/startQuiz' element={<Guard role={['*']}> <Start/></Guard>}></Route>
    <Route path='/addQuestion' element={<Guard role={['Admin']}><AddQuestion />
    </Guard> }></Route>
    <Route path='/quiz/:index' element ={ <Guard role={['*']}><Question data={data.questionsList} next={nextquestion}   index={data.questionIndex}/></Guard> }> </Route>
    <Route path='/score' element ={ <Score score={data.score} length={data.questionsList.length}  dispatch={dispatch}  />}></Route>
  </Routes>
  </BrowserRouter>

</QuizProvider>

  </>
);

  }

export default App
