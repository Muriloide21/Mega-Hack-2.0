import React from 'react'
import { useTheme } from '../../utils/ThemeContext'
// import ReactDOM from 'react-dom';
import MetisMenu from 'react-metismenu';
import { MdHome, MdPermIdentity, MdWbSunny } from 'react-icons/md'
import { BsMoon } from 'react-icons/bs'

import './react-metismenu-new.css';

import styled from 'styled-components';

const Container = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    flex-flow: column;
`;

const EventContainer = styled.div`
    background: #293C43;
    height: 85px;
    position: relative;
    
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

const ButtonGroupContainer = styled.div`
    height: 60px;
    background: #446165;
    padding: 0 10px;

    display: flex;
    align-items: center;
    justify-content:flex-start;

    color: white;
    font-weight: bold;
`;

const Icon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #FFFFFF;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #446165;
    font-size: 20;
`;

const TextIconButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const content = [
    {
        icon: 'presentation',
        label: 'Minicursos',
        content: [
            {
                icon: 'desktop',
                label: 'Minicurso 1',
                //to: '#another-link',
            },
            {
                icon: 'desktop',
                label: 'Minicurso 2',
                //to: '#another-link',
            },
            {
                icon: 'lock',
                label: 'Minicurso 3',
                //to: '#another-link',
            }
        ],
    },
    {
        icon: 'comments',
        label: 'Palestras',
        content: [
            {
                icon: 'desktop',
                label: 'Palestra 1',
                //to: '#another-link',
            },
            {
                icon: 'lock',
                label: 'Palestra 2',
                //to: '#another-link',
            },
            {
                icon: 'desktop',
                label: 'Palestra 3',
                //to: '#another-link',
            }
        ],
    },
    {
        icon: 'store',
        label: 'Exposições',
        content: [
            {
                icon: 'desktop',
                label: 'Exposição 1',
                //to: '#another-link',
            },
            {
                icon: 'desktop',
                label: 'Exposição 2',
                //to: '#another-link',
            },
            {
                icon: 'desktop',
                label: 'Exposição 3',
                //to: '#another-link',
            }
        ],
    }
];

export default function TalksList() {
    const { themeDark, setTheme } = useTheme();

    return (
        <Container>
                <EventContainer>
                    <p style={{transform: "translate(0,120%)"}}>HackTalk 1.0</p>
                </EventContainer>
                    
                <ButtonGroupContainer>
                    <TextIconButton>
                        <Icon style={{marginRight: 10}}>
                            <MdHome size={23}/>
                        </Icon>
                        <p>Home</p>    
                    </TextIconButton>
                </ButtonGroupContainer>

                <MetisMenu style={{}} content={content}/>

                <ButtonGroupContainer style={{justifyContent: 'space-between'}}>
                    <TextIconButton>
                        <Icon style={{marginRight: 10}}>
                            <MdPermIdentity size={23}/>
                        </Icon>
                        <p>Logout</p>
                    </TextIconButton>

                    <Icon onClick={() => setTheme(!themeDark)}>
                        {themeDark 
                        ? <MdWbSunny size={21}/>
                        : <BsMoon size={23}/>}
                    </Icon>
                </ButtonGroupContainer>
        </Container>
    );
}
