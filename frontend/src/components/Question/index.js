import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

// import './styles.css';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    -webkit-align-items:center;
    justify-content: space-between;

    width: 100%;
    height: 90px;
    margin-bottom: 15px;
`;

const QuestionContainer = styled.div`
    height: 100%;
    width: 100%;
    min-height: 90px;

    background: white;
    border-radius: 4px;

    display: flex;
    margin-right: 10px;
`;

const TextFields = styled.div`
    flex: 1;
    padding: 10px 5px;
    word-break: break-all;
    overflow-y: auto;
`;

const FeedButtons = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Button = styled.div`
    height: ${({size}) => `${size}px`};
    width: ${({size}) => `${size}px`};

    background: ${({color}) => color};
    border-radius: 4px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageContainer = styled.div`
    width: 75px;
    /* height: 100%; */

    display: flex;
    align-items: center;
    /* -webkit-align-items:center; */
    justify-content: center;
`;

const Image = styled.img`
    width: 60px;
    height 60px;
    border-radius: 50%;
`;

export default function Question({ user, question_text }) {
    return (
        <Container>    
            <QuestionContainer>
                <ImageContainer>
                    <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQG5sBqLXqEasg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=VDwSJ8NWFhHmfDkni1SLDXRxup1vbTAlstuRzS1D1Sc"/>
                </ImageContainer>
                
                <TextFields>
                    <strong>Vinicius Lucas</strong>
                    <br/>
                    <text>{question_text}</text>
                </TextFields>   
            </QuestionContainer>
            
            <FeedButtons>
                <Button color='#28A745' size={40}><FaThumbsUp size={25}/></Button>
                <Button color='#C61A1A' size={40}><FaThumbsDown size={25}/></Button>
            </FeedButtons>
        </Container>
    );
}