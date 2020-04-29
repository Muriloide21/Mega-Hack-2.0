import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { AiFillFile } from 'react-icons/ai'

import './style.css'

export default function Notes() {
    return (
        <>
        <Row style={{"height": "5%"}}>
            <div className="div-top">
                <text><strong>Anotações da palestra 4</strong></text>
                <button className="btn-save"><AiFillFile/></button>
            </div>
        </Row>
        <Row style={{"height": "92%"}}>
            <textarea className="notes-field"/>
        </Row>
        </>
    )
}