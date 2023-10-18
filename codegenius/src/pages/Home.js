import React, { useEffect, useState } from 'react';
import NavBar from '../componentes/NavBar';
import LoginModal from '../componentes/LoginModal';
import './Home.css'


function Home() {

    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        modalVisible ? body.style.overflow = "hidden" : body.style.overflow = "auto";
    }, [modalVisible]);

    function handleVisible() {
        setModalVisible(!modalVisible)
    }

    return (
        <>
            <NavBar
                onLoginModal={handleVisible}
            />

            <div className='bg1'></div>
            <div className='bg2'></div>
            <div className='bg1'></div>
            <div className='bg2'></div>
        
            {modalVisible && (
                <LoginModal
                    onLoginModal={handleVisible}
                />
            )}
        </>
    )
}

export default Home