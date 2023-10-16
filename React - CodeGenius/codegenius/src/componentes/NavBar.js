import React from 'react'
import './NavBar.css'
import {FiLogIn} from 'react-icons/fi'

function NavBar({onLoginModal}) {
  return (
    <div className='navbar-container'>
        <div className='navbar-content'>
        <h3>MindTech</h3>
        <ul className='navbar-menu'>
            <li>HOME</li>            
            <li>SOBRE NÓS</li>            
            <li>CODEGENIUS</li>            
            <li>EQUIPE</li>            
            <li onClick={() => onLoginModal()}><FiLogIn/></li>            
        </ul>
        </div>            
    </div>
  )
}

export default NavBar