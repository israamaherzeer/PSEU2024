
import React from 'react'
import {useNavigate} from 'react-router'
import style from './Login.module.css'
import { Iuser } from '../../types';
import {storeDate} from './../../utils'
function Login() {

const Navigate = useNavigate();
const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();
const userName = e.currentTarget['userName'].value;
const passWord = e.currentTarget['passWord'].value;

if( userName=='Israa'&& passWord==2004)
{
const user :Iuser ={
    user:userName,
    roll:'Admin'
}

storeDate('user',JSON.stringify(user))
Navigate('/addQuestion')
}
else {
    const user:Iuser={
        user:userName,
        roll:'user'
    }
    
    storeDate ('user',JSON.stringify(user))
    Navigate('/startQuiz')
}

}
return (
    <div className={style.loginContainer} >
    <form onSubmit={handleSubmit}>
            <h2>Login to the Quiz</h2>
        <div className={style.formElement}>
        <label htmlFor="userName">UserName</label>
        <input type="text"  name='userName' id='userName' />

        </div>
        <div  className={style.formElement}>
        <label htmlFor="">Password</label>
        <input type="passWord"  name='passWord' id='passWord'/>

        </div>
        <div className= {style.loginbutton}>

        <button type='submit' className={style.login}> Login
        </button>
        </div>
    </form>
    </div>
)
}



export default Login