import React, { useState } from 'react'
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'
import questions from '../questions'

function Question({
    questionText , 
    answers , 
    onSelectAnswer , 
    selectedAnswer , 
    answerState  , 
    onSkipAnswer , 
  

}) {
// const [answer, setAnswer] = uAeState({
//     selectedAnswer : '',
//     isCorrect : null
// })   
// function handleSelect(answer) {
//     selectedAnswer({
//         selectedAnswer : answer,
//         isCorrect : questions[index].answers[0] = answer
//     })
//     setTimeout(()=> {
//         selectedAnswer({
//             selectedAnswer : answer,
//             isCorrect : true
//     },1000)
// let answerState = ''
// if (answer.selectedAnswer) {
//     answerState = answer.isCorrect ? 'correct' : 'wrong'
    
// }

  return (
    <div id="question">
    
    <QuestionTimer
    onTimOut={ onSkipAnswer}
    TimeOut={10000}
    mode={answerState}
   
    />
    <h2>{questionText}</h2>
   <Answers 
   answers={answers}
   selectedAnswer={selectedAnswer}
   answerState={answerState}
   onSelectAnswer={onSelectAnswer}
 
   />
       
 </div>
  )
}

export default Question