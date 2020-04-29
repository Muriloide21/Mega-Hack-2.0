import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './styles.css'

export default function UserBuble() {
    return (
        <>
        <div className="user-div">
            <Col>
                <div className="user-pic"></div>      
            </Col>
            <Col>
                <div className="content-div">
                    <text><strong>Fulano da silva</strong></text>
                    <br/>
                    <text>Desenvolvedor Desenvolvido</text>
                </div>
            </Col>
        </div>
        </>
    );
}
