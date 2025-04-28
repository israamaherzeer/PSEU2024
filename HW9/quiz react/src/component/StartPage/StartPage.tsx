import React from 'react'
import  {useNavigate}from 'react-router'
import Header from '../header/Header';
import { useContext} from 'react'
import  { QuizContext } from './../provider/Provider'

const Start = () => {
const { data}  = useContext(QuizContext)
const navigate =useNavigate()
const startQuiz = () => {
    navigate(`/quiz/${data.questionIndex}`);

};

return (
    <>
    <Header value={false}/>
        <div className='smallContainer container'>
        <h1>Welcome!</h1>
        <button  onClick ={startQuiz} className='start button'>Start Quiz</button>
        </div>
    </>
    
)

}
export default Start
