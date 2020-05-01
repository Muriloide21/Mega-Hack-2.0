import React, { useState, useRef } from 'react'

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

const TitleBar = styled.div`
    width: 100%; 
    height: 45px;
    background: white;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
`;

export default function InteractiveBar() {
    const [questions,setQuestions] = useState([]);
    const [users,setUsers] = useState([]);
    const textRef = useRef();
    const annotationsRef = useRef();

    // const [users,setUsers] = useState([]);

    // useEffect(() => {
    //     setQuestions([... questions, {id: "1",user: "Athus", text: "Tudo bem?"}])
    //     console.log(questions)
    // }, []);

    return (
        <Container>
            <Tabs defaultActiveTab='question-tab'>
                <div id='question-tab' icon={<FaListUl />}>
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
                            onClick={() => {
                                setQuestions(questions.concat({
                                user: 'Vinicius',
                                text: textRef.current.value
                                }))

                                textRef.current.value = '';
                                textRef.current.focus();
                            }}
                        />
                    </MakeQuestion>
                </div>

                {/* Aba de Anotacoes */}
                <div id='notes-tab' icon={<FaStickyNote />}>
                    <TitleBar>
                        <strong>Anotacões da palestra 4</strong>
                    </TitleBar>
                    <TextArea
                        ref={annotationsRef}
                        placeholder="Insira aqui suas anotações..."
                        style={{marginTop: "8px"}}
                    />
                </div>

                {/* Aba de Participantes da Palestra */}
                <div id='users-tab' icon={<FaUserAlt />}>
                    <TitleBar>
                        <strong>Usuários da palestra 4</strong>
                    </TitleBar>

                    <QuestionList style={{marginTop: 12}}>
                        {/* {users.map(user => (
                            <UserBuble key={Math.random()} user={'Murilo'} skill={"Designer UX"}/>
                        ))} */}
                        <UserBuble key={Math.random()} user={'Athus'} skill={"Business"}/>
                        <UserBuble key={Math.random()} user={'Athus'} skill={"Business"}/>
                        <UserBuble key={Math.random()} user={'Athus'} skill={"Business"}/>
                        <UserBuble key={Math.random()} user={'Athus'} skill={"Business"}/>
                        <UserBuble key={Math.random()} user={'Athus'} skill={"Business"}/>
                        <UserBuble key={Math.random()} user={'Athus'} skill={"Business"}/>
                        <UserBuble key={Math.random()} user={'Athus'} skill={"Business"}/>
                        <UserBuble key={Math.random()} user={'Athus'} skill={"Business"}/>
                        <UserBuble key={Math.random()} user={'Athus'} skill={"Business"}/>
                        <UserBuble key={Math.random()} user={'Athus'} skill={"Business"}/>
                    </QuestionList>
                </div>
            </Tabs>
        </Container>
    );
}