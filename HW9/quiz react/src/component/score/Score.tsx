

import {useNavigate} from 'react-router'
import { actionTypes  ,Quizaction} from '../../types';



    interface Iprops {
      score :number;
      length :number;
      dispatch: React.ActionDispatch<[action: Quizaction]>

    }
  
    function Score(props :Iprops) {
        const Navigate = useNavigate();
        const startQuiz = () => {
        props.dispatch({ type: actionTypes.restart }); 
          Navigate(`/startQuiz`);
            
        };
        return (
   <div className='smallContainer container'>
            <h1>Quiz completed</h1>
            <h1>Your score: { props.score} / {props.length}</h1>
            <button onClick={startQuiz} className='restart button'>Restart</button>
        </div>


  )
}

export default Score