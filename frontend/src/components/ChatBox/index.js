import React from 'react'
import Question from '../../components/Question'

import './styles.css'

export default function ChatBox() {
    return (
        <>  
            <div className="chatbox-list">
                <Question />
                <Question />
            </div>
            <div className="ur-chatbox">
                <textarea className="chatbox-input" type="text" placeholder="Digite uma mensagem..."/>
                <button className="btn-send-chatbox">></button>
            </div>
        </>
    );
}