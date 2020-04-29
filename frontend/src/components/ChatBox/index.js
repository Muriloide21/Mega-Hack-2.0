import React from 'react'

import './styles.css'

export default function ChatBox() {
    return (
        <>  
            <div className="chatbox">
                <h6>Chat bubbles aqu</h6>
            </div>
            <div className="ur-chatbox">
                <textarea className="chatbox-input" type="text" placeholder="Digite uma mensagem..."/>
                <button className="btn-send-message"></button>
            </div>
        </>
    );
}