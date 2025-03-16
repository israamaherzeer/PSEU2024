import { useState, useEffect } from 'react'
import { questionsList } from '../../types'
import style from './Question.module.css'
interface Iprops {
data: questionsList;
next: (selected: boolean, isCorrect: boolean|null ) => void; 
}

function Question(props: Iprops) {
const [userChoice, setUserChoice] = useState<string| null>("");
const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
const [selected, setSelected] = useState(false);
const [disabled, setDisabled] = useState(false);


useEffect(() => {
    setUserChoice(null);
    setIsCorrect(null);
    setSelected(false);
    setDisabled(false);
}, [props.data]); 

const handleAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserChoice(e.target.value);
};

const handleRightAnswer = () => {
    if (userChoice) {
        setDisabled(true);
        setSelected(true);
    setIsCorrect(userChoice === props.data.correct_answer);
    }
};

return (
    <>
    <p className={style.question}>{props.data.question}</p>
        {props.data.answers.map((answer) => (
        <>
        <div className={style.answers}>
        <div  className={`${style.answer} ${userChoice === answer && isCorrect ? style.green : ""}
            ${userChoice === answer && isCorrect === false ? style.red : ""}`}>
                        
            <input
            type="radio"
            name="answer"
            value={answer}
            disabled={disabled}
            onChange={handleAnswer}
            />
            <label htmlFor={answer}>{answer}</label>
            </div>
            </div>
            </>
        ))}
    
        <div className={style.buttons}>
        <button onClick={handleRightAnswer} className="button">Submit</button>
        <button onClick={() => props.next(selected, isCorrect )} disabled={!selected} className="button">Next</button>
        </div>
        <p className={style.feedback}>
        {!selected ? "Select an answer" : isCorrect === null ? "" : isCorrect ? "Correct answer!" :
        `Incorrect answer. The correct answer is ${props.data.correct_answer}`}
        </p>
    <hr />
    </>
);
}

export default Question;
