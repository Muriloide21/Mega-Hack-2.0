import React from 'react';

import InteractiveBar from '../../components/InteractiveBar';
import Stream from '../../components/Stream';
import TalksList from '../../components/TalksList';

import { MdHome, MdWbSunny } from 'react-icons/md'

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

const IconDiv = styled.div`

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

export default function TalkManage(){
    return (
        <Container>
            <LeftBar >
                <Icon style={{margin: 'auto', marginTop: 20}}>
                    <MdHome size={23}/>
                </Icon>

                <Icon style={{margin: "auto", marginBottom: 20, backgroundColor: '#446165', border: "2px solid #ffffff", color: 'white'}}>
                    <MdWbSunny size={23}/>
                </Icon>
            </LeftBar>

            <Stream management="true"/>


            <InteractiveBar />
        </Container>
    );
}

