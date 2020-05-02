import React, {useState } from 'react';
import { useTheme } from '../../utils/ThemeContext'

import InteractiveBar from '../../components/InteractiveBar';
import Stream from '../../components/Stream';
import { useHistory } from "react-router-dom";

import { MdHome, MdWbSunny } from 'react-icons/md'
import { BsMoon } from 'react-icons/bs'

import Question from '../../components/Question';

import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`;

const LeftBar = styled.div`
    width: 70px;
    height: 100%;
    display: flex;
    flex-flow: column;
    background: #446165;
    justify-content:space-between;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #FFFFFF;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #446165;
    font-size: 20;
`;

export default function TalkManage() {
    const history = useHistory();
    const { themeDark, setTheme } = useTheme();
    const [questionOnScreen, setQuestionOnScreen] = useState();
    
    function showOnScreen(user,text){
        console.log('Vai mostrar!!');
        setQuestionOnScreen(<Question user={user} question_text={text} management={false} view={true} />);
    }

    return (
        <Container>
            <LeftBar >
                <Icon style={{margin: 'auto', marginTop: 20}} onClick={() => history.push('/main')}>
                    <MdHome size={23}/>
                </Icon>

                <Icon style={{margin: "auto", marginBottom: 20, backgroundColor: '#446165', border: "2px solid #ffffff", color: 'white'}} onClick={() => setTheme(!themeDark)}>
                        {themeDark 
                        ? <MdWbSunny size={21}/>
                        : <BsMoon size={23}/>}
                </Icon>
            </LeftBar>

            <Stream management="true" question={questionOnScreen} handleCloseQuestion={() => setQuestionOnScreen(null)}/>

            <InteractiveBar management={true} onScreen={showOnScreen}/>
        </Container>
    );
}

