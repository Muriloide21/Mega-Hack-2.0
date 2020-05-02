import React, { useState, useRef } from 'react'
import { saveAs } from 'file-saver';

import Tabs from '../Tabs/Tabs';
import Question from '../../components/Question'
import UserBuble from '../../components/UserBuble'

import { FaListUl, FaUserAlt, FaStickyNote } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { IoMdCopy } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

import styled from 'styled-components';

const Container = styled.div`
    width: 25%;
    background: #293C43;
    padding: 10px 25px;
`;

const List = styled.div`
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
    box-sizing: border-box;
    width: 100%; 
    height: 45px;
    background: white;
    border-radius: 4px;
    padding: 0 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 17px;
`;

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
`;

export default function InteractiveBar({ management, onScreen }) {
    const [questions,setQuestions] = useState([
        {user: 'Vinicius', text: 'Pergunta genérica aqui'},
        {user: 'Athus', text: 'Pergunta genérica aqui'},
        {user: 'Matheus', text: 'Pergunta genérica aqui'},
    ]);
    // const [users,setUsers] = useState([]);
    const textRef = useRef();
    const annotationsRef = useRef();

    // (() => {
    //     setInterval(() => {
    //         const new_question = {id: questions.length, user: 'Arthur', text:'O que cê foi fazer no mato maria chiquinha?'};
    //         setQuestions(questions.concat(new_question));
    //         console.log(questions);
    //     }, 10000);
    // })();

    return (
        <Container>
            <Tabs defaultActiveTab='question-tab'>
                <div id='question-tab' icon={<FaListUl />}>
                    <List>
                        {questions.map((question,index) => {

                            const handleDelete = (question_index) => {
                                setQuestions(questions.filter((_,i) => i !== question_index));
                            }

                            const selectQuestionOnScreen = (question_index) => {
                                onScreen(question.user,question.text);
                                handleDelete(question_index);
                            }

                            return (<Question 
                                key={Math.random()} 
                                user={question.user} 
                                question_text={question.text}
                                management={management} 
                                handleSelect={() => selectQuestionOnScreen(index)}
                                handleDelete={() => handleDelete(index)}/>
                            )})}
                    </List>

                    {!management
                    ? <>    
                        <MakeQuestion>
                            <TextArea ref={textRef} placeholder="Insira sua pergunta aqui..."/>    
                            <MdSend 
                                size={25} 
                                style={{cursor: "pointer", width: 50, color: 'white'}} 
                                onClick={() => {
                                    if(textRef.current.value.length > 0) {
                                        setQuestions(questions.concat({
                                            user: 'Vinicius',
                                            text: textRef.current.value
                                        }))
                                    }
                                    textRef.current.value = '';
                                    textRef.current.focus();
                                }}
                            />
                        </MakeQuestion>
                    </>
                      
                    : <>  
                    </> 
                    }
                </div>

                {/* Aba de Anotacoes */}
                <div id='notes-tab' icon={<FaStickyNote />}>
                    <TitleBar>
                        <strong>Anotacões da palestra 4</strong>

                        <ButtonGroup>
                            <IoMdCopy size={20} style={{marginRight: 10}} onClick={(e) => {
                                annotationsRef.current.select();
                                document.execCommand('copy');
                                e.target.focus();
                            }}/>

                            <FiDownload size={20} onClick={() => {
                                const blob = new Blob([annotationsRef.current.value], {type: "text/plain;charset=utf-8"});
                                saveAs(blob, "Anotacoes_da_palestra_4.txt");
                            }}/>
                        </ButtonGroup>
                    </TitleBar>
                    <TextArea
                        ref={annotationsRef}
                        placeholder="Insira aqui suas anotações..."
                        style={{marginTop: "8px"}}
                    />
                </div>

                {/* Aba de Participantes da Palestra */}
                <div id='users-tab2' icon={<FaUserAlt />}>
                    <TitleBar style={{minHeight: 45}}>
                        <strong>Usuários da palestra 4</strong>
                    </TitleBar>

                    <List style={{marginTop: 12}}>
                        {Array(15).fill(<UserBuble key={Math.random()} user={'Athus'} skill={"Business"} management={management}/>)}
                    </List>
                </div>
            </Tabs>
        </Container>
    );
}