import React, { useEffect, useState, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import socketio from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.css';
import './TalkView.css';

import Questions from '../../components/Questions'
import TalksList from '../../components/TalksList'

export default function TalkView(){
    const [questions, setQuestions] = useState([]);
    const user_id = 145;

    const socket = useMemo(() => socketio('http://localhost:3333', {
        query: { user_id },
    }), [user_id]);
   
    // useEffect(() => {
    //     socket.on('NewQuestion', data => {
    //         console.log(questions, data)
    //         setQuestions([... questions, data]);
    //     })
    // }, [questions, socket]);

    function sendQuestion(){

    }

    

    return (
        <>
        <h1>Palestra 4</h1>
            <Row>
                <Col md={1}>
                    <TalksList />
                </Col>
                <Col md={8}>
                    <iframe title="video" width="100%" height="500" src="https://www.youtube.com/embed/6Af6b_wyiwI" frameborder="0" showinfo="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" modestbranding allowfullscreen></iframe>
                </Col>
                <Col md={3} >
                    <Questions />
                </Col>
            </Row>
        </>
    );
}


