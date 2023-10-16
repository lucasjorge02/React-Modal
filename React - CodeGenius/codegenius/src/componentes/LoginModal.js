import React from 'react'
import './LoginModal.css'
import { AiOutlineClose } from 'react-icons/ai'
import codegenius from '../img/codegenius.png'

function LoginModal({ onLoginModal }) {
    return (
        <div id="modal-close" className='modal-container' onClick={(e) => {
            if (e.target.id === "modal-close") onLoginModal()
        }}>
            <div className='modal-content'>
                <div className='login-form'>
                    <div className='login-content'>
                        <div className='logo-container'>
                            <img src={codegenius} alt='logo-codegenius' />
                            <p>CodeGenius</p>
                        </div>
                        <p>Olá novamente!</p>
                        <form className='form-content'>
                            <label>E-mail:</label>
                            <input className='input-margin' type='email' placeholder='Digite seu e-mail'></input>
                            <label>Senha:</label>
                            <input type='password' placeholder='Digite sua senha'></input>
                            <a href='/'>Esqueceu sua senha?</a>
                            <button className='form-button'>ENTRAR</button>
                            <a href='/' className='link-right-button'>Não tem cadastro? Cadastre-se aqui</a>
                        </form>
                    </div>
                </div>
                <div className='img-container'>
                    <div className='linear-gradient'>
                        <AiOutlineClose className='close-icon' onClick={() => onLoginModal()} />
                        <p>MindTech</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal