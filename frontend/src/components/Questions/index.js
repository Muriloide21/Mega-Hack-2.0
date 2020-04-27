import React from 'react'
import Question from '../../components/Question'

import './styles.css'

export default function Questions() {
    return (
        <>   
        <div className="painel">
            <Question />
            <Question />
            {/* <div className="icon-talk"></div>
            <div className="icon-talk"></div>
            <div className="icon-talk"></div>
            <div className="icon-talk"></div> */}
        </div>
        </>
    );
}
