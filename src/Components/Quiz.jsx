import { useCallback, useRef, useState } from "react"
import Questions from "../questions"
import IsCompleted from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import Question from "./Question";
import Summary from "./Summary";
export default function Quiz (){
const [userAnswers, setUserAnswers] = useState([])
const [answerState, setAnswerState] = useState('')

const currentAnswerIndex = answerState === '' ?
 userAnswers.length : userAnswers.length-1;
const isComplete = currentAnswerIndex === Questions.length  // question length not answers length
const handleSelectAnswer = useCallback( function handleSelect(selectedAnswer) {
    // do not lose the answer in my array latest state
    setAnswerState('answered')
    setUserAnswers((prevAnswer) => 
        {
    return [...prevAnswer , selectedAnswer]
    
})
setTimeout(()=>{
    if (selectedAnswer === Questions[currentAnswerIndex].answers[0]) {
        setAnswerState('correct')
        
    }else{
        setAnswerState('wrong')
    }
    setTimeout(() => {
        setAnswerState('')
    }, 2000);
},1000)

},[currentAnswerIndex])
// callback to check in questionTimer in dependency to skip if i not choose answer
const handleSkipAnswer = useCallback(()=> handleSelectAnswer(null) , [handleSelectAnswer])

//check i finished question return another div

if (isComplete) {
    return <Summary  userAnswers={userAnswers}/>
    
};
// shuffle answers 


    return (
         <div id="quiz">
        <Question
        key={currentAnswerIndex}
        questionText = {Questions[currentAnswerIndex].text}
         answers={Questions[currentAnswerIndex].answers}
         onSelectAnswer={handleSelectAnswer}
         selectedAnswer={userAnswers[userAnswers.length -1]}
         answerState={answerState}
         onSkipAnswer={handleSkipAnswer}
         />
        </div>
        
        
    )
}