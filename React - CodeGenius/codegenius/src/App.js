import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from './componentes/NavBar';
import LoginModal from './componentes/LoginModal';

function App() {

  const [modalVisible, setModalVisible] = useState(false)
 
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    modalVisible ? body.style.overflow = "hidden" : body.style.overflow = "auto";
  }, [modalVisible]);

  // const body = document.getElementsByTagName("body")[0]
  // if(modalVisible === true) body.style.overflow = "hidden"
  // else body.style.overflow = "auto";

  function handleVisible() {
    setModalVisible(!modalVisible)
  }

  return (
    <>
    <NavBar
    onLoginModal={handleVisible}
    />
    {modalVisible && (
     <LoginModal
     onLoginModal={handleVisible}
     /> 
    )}
    </>
  );
}

export default App;
