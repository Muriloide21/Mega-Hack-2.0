import React from 'react';
import { Row, Col } from 'react-bootstrap'
// import socketio from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.css';
import './TalkView.css';

import InteractiveBar from '../../components/InteractiveBar';
import Stream from '../../components/Stream';
import TalksList from '../../components/TalksList';


export default function TalkView(){
    // const user_id = 145;

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
        <>
        <Row>
            <Col md={2}>
                <TalksList />
            </Col>
            <Col md={7}>
                <Stream/>
            </Col>
            <Col md={3} >
                <InteractiveBar/>
            </Col>
        </Row>
        </>
    );
}

