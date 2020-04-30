import React from 'react'
import './styles.css'

export default function UserBuble() {
    return (
        <>
        <div className="user-div">
            <div className="user-pic">
                {/* <img></img> */}
            </div>   

            <div className="content-div">
                <text className="user-name">Fulano da silva</text>
                <text className="user-skill">UX Designer</text>
            </div>
        </div>
        </>
    );
}
