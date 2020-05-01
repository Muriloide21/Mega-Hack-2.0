import React from 'react';

import InteractiveBar from '../../components/InteractiveBar';
import Stream from '../../components/Stream';
import TalksList from '../../components/TalksList';

import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`;

export default function TalkView(){
    // Informações a serem recebidas do backend:
    // Link do vídeo
    // Room do socket

    // const socket = useMemo(() => socketio('http://localhost:3333', {
    //     query: { user_id },
    // }), [user_id]);
   
    // useEffect(() => {
    //     socket.on('NewQuestion', data => {
    //         console.log(questions, data)
    //         setQuestions([... questions, data]);
    //     })
    // }, [questions, socket]);

    return (
        <Container>
            <TalksList />
            <Stream />
            <InteractiveBar />
        </Container>
    );
}

