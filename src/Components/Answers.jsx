import React, { useRef } from 'react'

function Answers({answers , selectedAnswer , answerState , onSelectAnswer}) {
    const shuffleAnswer = useRef();
    if (!shuffleAnswer.current) {
        shuffleAnswer.current = answers;
        shuffleAnswer.current.sort(()=> Math.random() - 0.5 );
    } 
     
    return (
    <ul id="answers" >
    {shuffleAnswer.current.map((answer)=> 
    {
        let cssClass = ''; 
        const isSelected = selectedAnswer === answer;
        if ( answerState === 'answered' && isSelected) {
            cssClass = 'selected'
        };
        if ((answerState === 'correct' || answerState === 'wrong' ) && isSelected) {
            cssClass = answerState
            
        }
          return  <li key={answer} className="answer">
            {/* Invoked Function */}
            <button onClick={() => onSelectAnswer(answer)} 
                 className={cssClass}
                   disabled={answerState !== ''}
            >{answer}</button> 

        </li>
})}

</ul>
  )
}

export default Answers