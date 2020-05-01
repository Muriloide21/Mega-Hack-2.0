import React, { Component, useState, useEffect, useRef } from 'react'

import Tabs from '../Tabs/Tabs';
import QuestionsContainer from '../../components/QuestionsContainer'
import Question from '../../components/Question'
import ChatBox from '../../components/ChatBox'
import UserBuble from '../../components/UserBuble'

import { FaCommentAlt, FaListUl, FaUserAlt, FaStickyNote } from "react-icons/fa";
import { MdSend } from "react-icons/md";

// import './styles.css'

import styled from 'styled-components';

const Container = styled.div`
    width: 25%;
    background: #293C43;
    padding: 10px 25px;
`;

const QuestionList = styled.div`
    overflow-y: auto;
    height: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const MakeQuestion = styled.div`
    height: 90px;
    padding-top: 15px;

    display: flex;
    align-items: center;
    justify-content:space-between;
`;

const TextArea = styled.textarea`
    flex: 1;
    height: 89%;
    resize: none;

    border-radius: 4px;
    padding: 5px;
    font-size: 15px;
`;

export default function InteractiveBar() {
    const [questions,setQuestions] = useState([]);
    const textRef = useRef();

    function sendQuestion(e){
        // e.target.click();
        var texto = document.getElementById('content').value;
        setQuestions([... questions, {id: "1",user: "Athus", text: texto}])
        console.log(questions)
        document.getElementById('content').value = '';
    }
    // const [users,setUsers] = useState([]);

    // useEffect(() => {
    //     setQuestions([... questions, {id: "1",user: "Athus", text: "Tudo bem?"}])
    //     console.log(questions)
    // }, []);

    return (
        <Container>
            <Tabs>
                <div label={<FaListUl />}>
                    <QuestionList>
                        {questions.map(question => (
                            <Question key={Math.random()} user={question.user} question_text={question.text}/>
                        ))}
                    </QuestionList>
                    
                    <MakeQuestion>
                        <TextArea ref={textRef} placeholder="Insira sua pergunta aqui..."/>    
                        <MdSend 
                            size={25} 
                            style={{cursor: "pointer", width: 50, color: 'white'}} 
                            onClick={() => {setQuestions(questions.concat({
                                user: 'Vinicius',
                                text: textRef.current.value
                            }))}}
                        />
                    </MakeQuestion>
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
                        {/* <List itens={users} itensComponent={UserBuble}/> */}
                        {/* <ul className="generic-list">
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
                        </ul> */}
                    </div>
                </div>
            </Tabs>
        </Container>
    );
}