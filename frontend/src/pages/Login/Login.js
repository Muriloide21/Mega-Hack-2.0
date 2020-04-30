import React from 'react';
import './Login.css';

export default function Login(){
    function handleLogin(){
        window.location.href = "/talkview";
    }
    
    return (
        <>
        <div class="login-div">
            <div class="logo"></div>
            <div class="title">HackTalk</div>
            <div class="sub-title">Faça Login com o Linkedin</div>
            <div class="btn-login-div">
                <button class="btn-login" onClick={handleLogin} ></button>
            </div>
        </div>

        </>
    );
}


