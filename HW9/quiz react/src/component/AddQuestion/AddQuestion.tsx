
import React from  'react'
import style from './AddQuestion.module.css'
import { questions } from '../../types';
import Header from '../header/Header';
import Swal from 'sweetalert2'


function AddQuestion() {
    

const  handleAddQuestion=(question:questions)=>{
const storedQuestions = JSON.parse(localStorage.getItem("questionList") || "[]");
 const newQuestionList = [question,...storedQuestions];
  localStorage.setItem("questionList", JSON.stringify(newQuestionList));
    Swal.fire({
        title: 'Added a new question !',
        icon: 'success',
    
    })
}
const initalForm  :questions={
    question : " ",
    correctAnswer :" ",
    answers : []
}
const handleSbmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const answersList:string[]=[];
    answersList.push(e.currentTarget["optionA"].value)
    answersList.push(e.currentTarget["optionB"].value)
    answersList.push(e.currentTarget["optionC"].value)
    answersList.push(e.currentTarget["optionD"].value)

const newQuestion :questions ={
question :e.currentTarget["question"].value,
correctAnswer :e.currentTarget["correctAnswer"].value,
answers:answersList,
}
console.log(newQuestion);
handleAddQuestion ( newQuestion)

}
return (
    <>
    <Header value={true}/>
<div className='  quizContainer container'>
<form action="" className={style.container}  onSubmit={handleSbmit}>
<h4>Add new Question</h4>
    <div >
<div className={style.formElement}>
    <label htmlFor="question"> Question:</label>
    <input type="text" id='question'  required defaultValue={initalForm.question}    />
        </div>
    <div className={style.formElement}>
    <label htmlFor="optionA">Option A: </label>
    <input type="text"  id='optionA' required  defaultValue={initalForm.answers[0]}/>
    </div>
    <div className={style.formElement}>
    <label htmlFor="optionB">Option B :</label>
    <input type="text"  id='optionB' required  defaultValue={initalForm.answers[1]} />
    </div >
    <div className={style.formElement}>
    <label htmlFor="optionC">Option C :</label>
    <input type="text"  id='optionC' required defaultValue={initalForm.answers[2]}/>
    </div>
    <div className={style.formElement}>
    <label htmlFor="optionD">Option D :</label>
    <input type="text" id='optionD' required defaultValue={initalForm.answers[3]} />
    </div>
    <div className={style.formElement}>
    <label htmlFor="correctAnswer"> Correct Answer :</label>
    <input type="text" id='correctAnswer' required />
    </div>
    <button   type='submit' className='start button'>Add Question</button>
    </div>

</form>

</div>
    </>

)


}

export default AddQuestion