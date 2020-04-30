import React, { useState, useEffect } from 'react'

import Question from '../../components/Question'

import { MdSend } from "react-icons/md";

import './styles.css'

export default function QuestionsContainer() {
    const [questions,setQuestions] = useState([]);

    useEffect(() => {
        setQuestions([... questions, {id: "1",user: "Athus", text: "Tudo bem?"}])
        console.log(questions)
    }, []);

    function sendQuestion(e){
        // e.target.click();
        var texto = document.getElementById('content').value;
        setQuestions([... questions, {id: "1",user: "Athus", text: texto}])
        console.log(questions)
        document.getElementById('content').value = '';
    }

    function initialTab(e){
        e.target.click();
    }



    return (
        <>
        <div className="generic-list-container">
            <ul className="generic-list" id="qlist">
                {questions.map(question => (
                <li key={question.id}>
                    <Question user={question.user} question_text={question.text}/>
                </li>
                ))}
            </ul>
        </div>
        <div className="send-question">
            <textarea onKeyUp={event => event.keyCode === 13 ? sendQuestion() : null} id="content" className="question-input" type="text" placeholder="Insira sua pergunta aqui..."/>
            <div className="btn-send" onClick={event => sendQuestion(event)} style={{"cursor": "pointer"}}><MdSend/></div>
        </div>
        </>
    );
}

