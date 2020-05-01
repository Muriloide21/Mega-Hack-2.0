import React, { useState, useRef } from 'react'
import { saveAs } from 'file-saver';

import Tabs from '../Tabs/Tabs';
import Question from '../../components/Question'
import UserBuble from '../../components/UserBuble'

import { FaCommentAlt, FaListUl, FaUserAlt, FaStickyNote } from "react-icons/fa";
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
                    <List>
                        {questions.map(question => (
                            <Question key={Math.random()} user={question.user} question_text={question.text}/>
                        ))}
                    </List>
                    
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
                        <UserBuble key={Math.random()} user={'Athus'} skill={"Business"}/>
                        <UserBuble key={Math.random()} user={'Athus'} skill={"Business"}/>
                        <UserBuble key={Math.random()} user={'Athus'} skill={"Business"}/>
                        <UserBuble key={Math.random()} user={'Athus'} skill={"Business"}/>
                    </List>
                </div>
            </Tabs>
        </Container>
    );
}