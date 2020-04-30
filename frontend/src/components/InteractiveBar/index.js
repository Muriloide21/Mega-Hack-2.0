import React, { useState, useEffect } from 'react'

import Tabs from './Tabs';
import QuestionsContainer from '../../components/QuestionsContainer'
import Question from '../../components/Question'
import ChatBox from '../../components/ChatBox'
import UserBuble from '../../components/UserBuble'

import { FaCommentAlt, FaListUl, FaUserAlt, FaStickyNote } from "react-icons/fa";
import { MdSend } from "react-icons/md";

import './styles.css'

export default function InteractiveBar() {
    const [questions,setQuestions] = useState([]);

    // useEffect(() => {
    //     setQuestions([... questions, {id: "1",user: "Athus", text: "Tudo bem?"}])
    //     console.log(questions)
    // }, []);

    function sendQuestion(e){
        // e.target.click();
        var texto = document.getElementById('content').value;
        setQuestions([... questions, {id: "1",user: "Athus", text: texto}])
        console.log(questions)
    }

    function initialTab(e){
        e.target.click();
    }

    return (
        <>
        <div className="painel" onload={event => initialTab(event)}>
            <Tabs>
                {/* Aba de Chat */}
                <div label={<FaCommentAlt />} id="chat-tab">
                    <div className="chat"> 
                        {/* <ChatBox /> */}
                        <div className="send-question">
                        <textarea className="question-input" type="text" placeholder="Insira sua pergunta aqui..."/>
                        <div className="btn-send"><MdSend/></div>
                    </div>
                    </div>
                </div>

                {/* Aba de Perguntas */}
                <div label={<FaListUl />} id="questions-tab">
                    <QuestionsContainer />
                    {/* <div className="generic-list-container">
                        <ul className="generic-list" id="qlist">
                            {questions.map(question => (
                            <li key={question.id}>
                                <Question user={question.user} question_text={question.text}/>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className="send-question">
                        <textarea id="content" className="question-input" type="text" placeholder="Insira sua pergunta aqui..."/>
                        <div className="btn-send" onClick={event => sendQuestion(event)} style={{"cursor": "pointer"}}><MdSend/></div>
                    </div> */}
                </div>

                {/* Aba de Anotacoes */}
                <div label={<FaStickyNote />} id="notes">
                    <div className="title-div">
                        <text>Anotações da Palestra 4</text>
                    </div>
                    <textarea className="notes-field" placeholder="Insira aqui suas anotações."/>
                </div>

                {/* Aba de Participantes da Palestra */}
                <div label={<FaUserAlt />} id="users">
                    <div className="title-div">
                        <text>Lista de Participantes da Palestra 4</text>
                    </div>
                    <div className="generic-list-container">
                        <ul className="generic-list">
                            <li><UserBuble/></li>
                            <li><UserBuble/></li>
                            <li><UserBuble/></li>
                            <li><UserBuble/></li>
                            <li><UserBuble/></li>
                            <li><UserBuble/></li>
                            <li><UserBuble/></li>
                            <li><UserBuble/></li>
                            <li><UserBuble/></li>
                            <li><UserBuble/></li>
                            <li><UserBuble/></li>
                            <li><UserBuble/></li>
                            <li><UserBuble/></li>
                        </ul>
                    </div>
                </div>
            </Tabs>
        </div>
        </>
    );
}

