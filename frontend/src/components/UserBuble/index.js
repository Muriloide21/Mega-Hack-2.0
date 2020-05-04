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

    const imageLinks = {
        Athus: "https://media-exp1.licdn.com/dms/image/C4E03AQF4vxK5m13VWg/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=RT40AtVykz_qAivwNf08fXWKQO6_7RLY9Yr0ohOJiDw",
        Murilo: "https://media-exp1.licdn.com/dms/image/C4D03AQHuXYfWwb1fkw/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=TBLjKPZYNXByYMYBD4aH45D9HOiVKTO_uJTWYP0xxlU",
        Leonardo: "https://media-exp1.licdn.com/dms/image/C4D03AQFGiAFu9-v5hA/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=_mvKHcqv4LLlF72p0EpdCYr1aHzYvvyEsUu6B402qzI",
        Vinicius: "https://media-exp1.licdn.com/dms/image/C4E03AQG5sBqLXqEasg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=VDwSJ8NWFhHmfDkni1SLDXRxup1vbTAlstuRzS1D1Sc",
        Matheus: "https://media-exp1.licdn.com/dms/image/C4D03AQFlfIFFuEmIQQ/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=ZRe-IEWQr90MUqhRR5AWCLokQ7jcpFkLIN8b29-emL0",
    }

    return (
        <Container>
            <ImageContainer>
                <Image src={imageLinks[user]}/>
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
