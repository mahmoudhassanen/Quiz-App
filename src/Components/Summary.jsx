import React from 'react'
import IsCompleted from '../assets/quiz-complete.png'
import Questions from '../questions'
function Summary({userAnswers}) {
    const skippedAnswers = userAnswers.filter((answer) => answer === null)
    const correctAnswer = userAnswers.filter((answer , index) => 
    
        answer === Questions[index].answers[0]
    );
    const skippedShare = Math.round((skippedAnswers.length / userAnswers.length) * 100)
    const correctShare = Math.round((correctAnswer.length / userAnswers.length) * 100)
const wrongAnswer = 100 - skippedShare - correctShare
    return (
    <div id='summary'>
        <img src={IsCompleted} alt="" />
        <h2>Quiz Completed !</h2>
        <div id='summary-stats'>
            <p>
                <span className='number'>{skippedShare}%</span>
            <span className='text'>Skipped</span>
            </p>
            <p>
                <span className='number'>{correctShare}%</span>
            <span className='text'>answered correctly</span>
            </p>
            <p>
                <span className='number'>{wrongAnswer}%</span>
            <span className='text'>answered incorrectly</span>
            </p>
            
        </div>
        <ol>
            {userAnswers.map((answer,index)=> 
           
            {
                let cssClass = 'user-answer'
                if (answer === null) {
                    cssClass += ' skipped'
                    
                }else if (answer === Questions[index].answers[0])
                    {
                        cssClass += ' correct'
                    }else{
                        cssClass += ' wrong'
                    }
            return ( 
                <li>
                <h3>{index + 1}</h3>
                <p className='question '> {Questions[index].text}</p>
                <p className={cssClass}> {answer ?? 'skipped'}</p>
            </li>
            )}
            )}
           
        </ol>
    </div>
  )
}

export default Summary