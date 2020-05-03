import React, { useState } from 'react';
import socketio from 'socket.io-client';

import { UserService } from '../../utils/UserService';
import InteractiveBar from '../../components/InteractiveBar';
import Stream from '../../components/Stream';
import TalksList from '../../components/TalksList';

import styled from 'styled-components';
import { useEffect } from 'react';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`;

export default function TalkView() {
    const email = UserService.getEmail();
    const [socket, setSocket] = useState();

    console.log('carregou Talkview')

    useEffect(() => {
        setSocket(socketio('http://localhost:3333', {
            query: { user_id: email, room: 'Talk4' }
        }))
    }, []);

    return (
        <Container>
            <TalksList />
            <Stream />
            <InteractiveBar socket={socket} />
        </Container>
    );
        
}

