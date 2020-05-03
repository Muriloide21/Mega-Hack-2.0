import React, { useState, useRef, useEffect } from 'react'
import { saveAs } from 'file-saver';

import Tabs from '../Tabs/Tabs';
import Question from '../../components/Question'
import UserBuble from '../../components/UserBuble'

import { UserService } from '../../utils/UserService';
import { FaListUl, FaUserAlt, FaStickyNote } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { IoMdCopy } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

import styled from 'styled-components';
import QuestionsTab from './QuestionsTab';

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

export default function InteractiveBar({ management, onScreen, socket }) {
    const [questions, setQuestions] = useState([
        {user: 'Vinicius', text: 'Pergunta genérica aqui'},
        {user: 'Athus', text: 'Pergunta genérica aqui'},
        {user: 'Matheus', text: 'Pergunta genérica aqui'},
    ]);
    console.log('carregou interactiveBar')

    const email = UserService.getEmail();
    const textRef = useRef();
    const annotationsRef = useRef();

    function newMessage(question){
        setQuestions([...questions, question])
    }

    return (
        <Container>
            <Tabs defaultActiveTab='question-tab'>
                <div id='question-tab' icon={<FaListUl />}>
                    <QuestionsTab socket={socket} onScreen={onScreen} management={management}/>
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