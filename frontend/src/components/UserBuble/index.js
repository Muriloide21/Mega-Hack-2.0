import React, { useState } from 'react'
// import './styles.css'

import styled from 'styled-components';

import { MdMic, MdMicOff } from "react-icons/md";


const Container = styled.div`
    display: flex;
    align-items: center;
    -webkit-align-items:center;
    justify-content: space-between;
    background: white;
    width: 100%;
    height: 90px;
    margin-bottom: 15px;
    border-radius: 4px;
    margin-right: 10px;

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

const TextFields = styled.div`
    flex: 1;
    padding: 10px 5px;
    word-break: break-all;
`;

const Icon = styled.div`
    margin: 20px;
`;

export default function UserBuble({user, skill, management, voice_request = true}) {
    const [voiceAuth, setVoiceAuth] = useState(false);

    return (
        <Container>
            <ImageContainer>
                <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQF4vxK5m13VWg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=-uQlX4QmJ6FNqGOf1AeE6Xluaxh4-PEIV566IXVInPU"/>
            </ImageContainer>

            <TextFields>
                <strong>{user}</strong>
                <br/>
                <text>{skill}</text>
            </TextFields>
             
            {(management && voice_request) && (voiceAuth 
                ? <Icon><MdMic size={30} onClick={() => setVoiceAuth(false)} /></Icon>
                : <Icon><MdMicOff size={30} onClick={() => setVoiceAuth(true)} /></Icon>
            )}
        </Container>
    );
}
