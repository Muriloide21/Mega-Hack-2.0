import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import './styles.css';

export default function Question() {

    return (
        <>    
        <Row style={{"margin-bottom": "10px", "height": "60px"}}>
            <Col md={10}>
                <div className="question">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
            </Col>
            <Col md={2}>
                <Button variant="success"> <FaThumbsUp style={{"display":"flex", "margin-top": "-3px"}}> </FaThumbsUp> </Button>
                <Button variant="danger"> <FaThumbsDown style={{"display":"flex", "margin-top": "-3px"}}> </FaThumbsDown> </Button>
            </Col>
        </Row>
        </>
    );
}
