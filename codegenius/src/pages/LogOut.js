import React from "react";
import { useNavigate } from "react-router-dom";
import "./LogOut.css";
import {FiLogOut} from 'react-icons/fi'

function LogOut() {
  const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("authToken");
    navigate("/");
  } 

  return (
    <>
      <div className="logout-container">
        <h2>Bem vindo ao CodeGenius</h2>
        <button onClick={() => handleLogout()}>Sair <FiLogOut/></button>
      </div>
    </>
  );
}

export default LogOut;