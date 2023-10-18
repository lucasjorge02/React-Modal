import React, { useState } from 'react'
import api from '../Api'
import './LoginModal.css'
import { AiOutlineClose } from 'react-icons/ai'
import codegenius from '../img/codegenius.png'
import { useNavigate } from 'react-router-dom'

function LoginModal({ onLoginModal }) {

    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault()

        api.post('/login', {
            email: username,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status === 200 && response.data?.token) {
                sessionStorage.setItem('authToken', response.data.token);

                navigate("/logout")
                onLoginModal();
            } else {
                throw new Error('Ocorreu um erro interno!');
            }
        }).catch(error => {
            console.log('DEI ERRO NO CATCH', {error})
            console.log(error.message)
        })
    }

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
                        <form className='form-content' onSubmit={handleSubmit}>
                            <label>E-mail:</label>
                            <input className='input-margin' type='email' placeholder='Digite seu e-mail' onChange={(e) => setUserName(e.target.value)}></input>
                            <label>Senha:</label>
                            <input type='password' placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)}></input>
                            <a href='/'>Esqueceu sua senha?</a>
                            <button className='button-form'>ENTRAR</button>
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