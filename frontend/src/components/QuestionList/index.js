import React from 'react'
import Question from '../../components/Question'
import { MdSend } from 'react-icons/md'

import './styles.css'

export default function QuestionList() {
    return (
        <>  
        <div className="question-list">
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
        </div>
        <div className="ur-question">
            <textarea className="question-input" type="text" placeholder="Insira sua pergunta aqui..."/>
            <button className="btn-send-question"><MdSend/></button>
        </div>
        </>
    );
}