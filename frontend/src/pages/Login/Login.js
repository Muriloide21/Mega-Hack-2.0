import React, { useRef  } from 'react';
import { useHistory } from "react-router-dom";

import LoginImage from '../../assets/LoginImage.svg';
import Bubbles from '../../assets/Bubbles.svg';
import LinkedIn from '../../assets/SignInLinkedIn.png';
import { UserService } from '../../utils/UserService';

import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ImageContainer = styled.div`
    height: 100%;
    height: -webkit-fill-available;

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (width: 1200px) {
        justify-content: flex-end;
    }

    @media (max-width: 1200px) {
        justify-content: flex-end;
    }

    @media (width: 700px) {
        display: none;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

const BackgroundImage = styled.img`
    height: 430px;
    margin-left: 10%;
    width: 60%;

    @media (width: 1200px) {
        display: none;
    }

    @media (max-width: 1200px) {
        display: none;
    }
`;

const LoginContainer = styled.div`
    box-sizing: border-box;
    background: #446165;
    height: 100%;
    width: 40%;
    padding: 12% 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (width: 1200px) {
        width: 70%;
    }

    @media (max-width: 1200px) {
        width: 70%;
    }

    @media (width: 700px) {
        width: 100%;
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`;

const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    box-sizing: border-box;
    height: 65px;
    width: 100%;
    border-radius: 4px;

    border: 0;
    outline: 0;
    box-shadow: none;

    color: #808080;
    font-size: 1.5rem;
    padding: 5px 10px;
    margin-bottom: 25px;
`;

const Button = styled.button`
    box-sizing: border-box;
    height: 65px;
    width: 100%;
    border-radius: 4px;
    background: #191919;

    border: 0;
    outline: 0;
    box-shadow: none;
    
    color: #ffffff;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 25px;

    cursor: pointer;
`;

export default function Login(){
    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        UserService.doLogin(email,password);
        history.push("/main");
    }
    
    return (
        <Container>
            <ImageContainer>
                <BackgroundImage src={LoginImage} alt="HalkTalk"/>
                <img src={Bubbles} alt="Bubbles" style={{height: '100vh', minHeight: '100vh'}}/>
            </ImageContainer>

            <LoginContainer>
                <div style={{height: 300, width: '100%', background: '#fff', marginBottom: 25}}>
                    <img src=""/>
                </div>

                <Form onSubmit={handleSubmit}>
                    <Input type="text" ref={emailRef} placeholder='E-mail'/>
                    <Input type="password" ref={passwordRef} placeholder='Senha'/>
                    <Button type="submit">Login</Button>

                    <img src={LinkedIn} alt="Sign in with Linkedin" onClick={handleSubmit} style={{cursor: 'pointer'}}/>
                </Form>
            </LoginContainer>
        </Container>
    );
}

