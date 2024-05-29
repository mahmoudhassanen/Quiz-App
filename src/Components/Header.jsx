import React from 'react'
import Logo from '../assets/quiz-logo.png'
function Header() {
  return (
    <header>
        <img src={Logo} alt=""/>
        <h1> React Quiz</h1>
    </header>
  )
}

export default Header