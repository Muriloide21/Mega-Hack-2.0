import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import './styles.css';

export default function Question({ user, question_text }) {
    return (
        <>    
        <Row style={{"marginBottom": "10px", "maxHeight": "80px"}}>
            <Col md={10}  style={{"marginTop": "2%"}}>
                <div className="question">
                    <Row>
                        <Col md={2}>
                            <div className="avatar-pic"></div>
                        </Col>
                        <Col className="question-content" md={10} style={{"overflowY": "auto", "maxHeight": "70px"}}>
                            <Row>
                                <span><strong>{user}</strong></span>
                            </Row>
                            <Row>
                                <span>{question_text}</span>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col md={2} style={{"marginTop": "2%"}}>
                <Button variant="success"> <FaThumbsUp style={{"display":"flex"}}> </FaThumbsUp> </Button>
                <Button variant="danger"> <FaThumbsDown style={{"display":"flex"}}> </FaThumbsDown> </Button>
            </Col>
        </Row>
        </>
    );
}
