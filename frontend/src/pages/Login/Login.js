import React from 'react';
import LoginImage from '../../assets/LoginImage.png';

import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;
`;

const ImageContainer = styled.div`
    width: 40%;

    display: flex;
    align-items: center;
    justify-content: center;
`;


export default function Login(){
    function handleLogin(){
        window.location.href = "/talkview";
    }
    
    return (
        <Container>
            <ImageContainer>
                <img src={LoginImage} alt="HalkTalk" />
            </ImageContainer>

        </Container>
    );
}
{/* <div class="login-div">
            <div class="logo"></div>
            <div class="title">HackTalk</div>
            <div class="sub-title">Faça Login com o Linkedin</div>
            <div class="btn-login-div">
                <button class="btn-login" onClick={handleLogin} ></button>
            </div>
        </div> */}

