import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import './styles.css';

export default function Question() {

    return (
        <>    
        <Row style={{"margin-bottom": "10px", "max-height": "80px"}}>
            <Col md={10}  style={{"margin-top": "2%"}}>
                <div className="question">
                    <Row>
                        <Col md={2}>
                            <div className="avatar-pic"></div>
                        </Col>
                        <Col className="question-content" md={10} style={{"overflow-y": "auto", "max-height": "70px"}}>
                            <Row>
                                <span><strong> Fulano da Silva </strong></span>
                            </Row>
                            <Row>
                                <span> Como pode um peixe vivo viver fora da água fria? Como pode um peixe vivo viver fora da água fria?Como pode um peixe vivo viver fora da água fria?Como pode um peixe vivo viver fora da água fria?aaaaaaaaaa </span>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col md={2} style={{"margin-top": "2%"}}>
                <Button variant="success"> <FaThumbsUp style={{"display":"flex"}}> </FaThumbsUp> </Button>
                <Button variant="danger"> <FaThumbsDown style={{"display":"flex"}}> </FaThumbsDown> </Button>
            </Col>
        </Row>
        </>
    );
}
