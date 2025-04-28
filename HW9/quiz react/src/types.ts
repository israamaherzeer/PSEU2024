

export interface questions {
    question: string;
    answers: string[];
    correctAnswer: string;

}
export interface Quizstate {
questionsList:questions[],
questionIndex:number;
quizstatus :Quizstatus
score:number

}
export enum Quizstatus {
"Start",
"InProgress",
"Complete"
}

export enum actionTypes {
Init = 'init',
NextQuestion= "next",
Start = 'start',
AddQuestion= "addQuestion",
restart='restart'
}
export interface init  {
    type: actionTypes.Init
}
export interface start  {
    type: actionTypes.Start
}
export interface nextQuestion{
type :actionTypes.NextQuestion
paylod :{selected: boolean, isCorrect: boolean|null}
}

export interface restart{
    type :actionTypes.restart
   
}

 export interface Iuser{
    user:string;
    roll:'Admin'|'user' 
}


export type Quizaction = init|nextQuestion|start|restart







