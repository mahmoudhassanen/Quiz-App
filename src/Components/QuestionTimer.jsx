import React, { useEffect, useState } from 'react'

function QuestionTimer({onTimOut , TimeOut , mode}) {
    const [remainingTimer, setRemainingTimer] = useState(TimeOut)
    useEffect(() => {
    const TimerOut = setTimeout(onTimOut, TimeOut)
    return  () => {
      clearTimeout(TimerOut)
    } 
    }, [TimeOut , onTimOut])

    useEffect(() => {
    const interval = setInterval(() => {
        setRemainingTimer((prevTime) => prevTime - 100)
    }, 100);
 return () => {
    clearInterval(interval)
 }
    }, [])


    
  return (
    <div>
        <progress 
        className={mode}
        id='question-time' value={remainingTimer} max={TimeOut} />
    </div>

  )
}

export default QuestionTimer