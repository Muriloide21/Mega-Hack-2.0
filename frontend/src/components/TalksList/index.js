import React, { useState, useEffect } from 'react';
import { useTheme } from '../../utils/ThemeContext';
import { useHistory } from "react-router-dom";

import MetisMenu from '../MetisMenu';

import { MdHome, MdPermIdentity, MdWbSunny } from 'react-icons/md';
import { BsMoon } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaComments, FaStore, FaDesktop, FaLock } from 'react-icons/fa';

import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


import tooltip from 'react-bootstrap/tooltip';

import { makeStyles } from '@material-ui/core/styles';
// import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { UserService } from '../../utils/UserService';

// import './react-metismenu-new.css';

import './styles.css';

import styled from 'styled-components';

const pop = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Teste</Popover.Title>
            <Popover.Content>
                <strong>Responsável:</strong> Athus Cavalini<br />
                <strong>Participantes:</strong> 12/45<br />
                <strong>Descrição:</strong><br />
                Tralalalala
            </Popover.Content>
    </Popover>
);


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
        icon: <AiOutlineFundProjectionScreen/>,
        label: 'Minicursos',
        content: [
            {
                icon: <FaDesktop/>,
                label: 'Minicurso 1',
                //to: '#another-link',
                title: "Título do minicurso",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                speaker: "John Doe",
                n: 13,
                m: 45,
                available: true,
            },
            {
                icon: <FaDesktop/>,
                label: 'Minicurso 2',
                //to: '#another-link',
                title: "Design de Sucesso",
                description: "Aqui abordarei os principais requisitos para desenvolver um design de sucesso para sua aplicação",
                speaker: "Murilo Schirmer",
                n: 20,
                m: 45,
                available: true,
            },
            {
                icon: <FaLock/>,
                label: 'Minicurso 3',
                //to: '#another-link',
                title: "Título do minicurso",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                speaker: "John Doe",
                n: 13,
                m: 45,
                available: false,
            }
        ],
    },
    {
        icon: <FaComments/>,
        label: 'Palestras',
        content: [
            {
                icon: <FaDesktop/>,
                label: 'Palestra 1',
                //to: '#another-link',
                title: "Isolamento e Tecnologia",
                description: "Em 2014, o mundo evitou uma terrível epidemia global do Ebola, graças a milhares de generosos profissionais de saúde e, francamente, graças também a muita sorte. Em retrospectiva, sabemos o que deveríamos ter feito melhor. Então, Bill Gates sugere que agora é a hora de colocar todas as nossas boas ideias em prática, de planejamento de cenários a treinamento de profissionais de saúde. Como ele diz: \"Não há razão para pânico, mas precisamos nos apressar\".",
                speaker: "Bill Gates",
                n: 47,
                m: 50,
                available: true,
            },
            {
                icon: <FaLock/>,
                label: 'Palestra 2',
                //to: '#another-link',
                title: "Como falar de forma que as pessoas queiram ouvir",
                description: "Você já se sentiu como se, ao falar, ninguém ouvisse? Julian Treasure está aqui para ajudar. Nessa palestra bastante útil, o especialista em sons demonstra como falar poderosamente; desde exercícios vocais até dicas de como falar com empatia. Uma palestra que pode ajudar o mundo a soar mais bonito.",
                speaker: "Julian Treasure",
                n: 40,
                m: 45,
                available: false,
                img: "http://img.youtube.com/vi/eIho2S0ZahI/0.jpg"
            },
            {
                icon: <FaDesktop/>,
                label: 'Palestra 3',
                //to: '#another-link',
                title: "Como detectar um mentiroso",
                description: "Em qualquer dia, mentem para nós de 10 a 200 vezes, e as pistas para detectar estas mentiras podem ser sutis e contra-intuitivas . Pamela Meyer, autora de \"Liespotting\" (Detectando mentiras), mostra maneiras usadas por quem é treinado para reconhecer tentativas de engano -- e ela argumenta que honestidade é um valor que vale a pena preservar.",
                speaker: "Pamela Meyer",
                n: 40,
                m: 45,
                available: true,
                img: "http://img.youtube.com/vi/P_6vDLq64gE/0.jpg"
            }
        ],
    },
    {
        icon: <FaStore/>,
        label: 'Exposições',
        content: [
            {
                icon: <FaDesktop/>,
                label: 'Exposição 1',
                //to: '#another-link',
                title: "Título da exposição",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                speaker: "John Doe",
                n: 17,
                m: 45,
                available: true,
            },
            {
                icon: <FaDesktop/>,
                label: 'Exposição 2',
                //to: '#another-link',
                title: "Título da exposição",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                speaker: "John Doe",
                n: 17,
                m: 45,
                available: true,
            },
            {
                icon: <FaDesktop/>,
                label: 'Exposição 3',
                //to: '#another-link',
                title: "Título da exposição",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                speaker: "John Doe",
                n: 17,
                m: 45,
                available: true,
            }
        ],
    }
];

export default function TalksList() {
    const history = useHistory();
    const { themeDark, setTheme } = useTheme();

    const handleLogout = () => {
        UserService.doLogout();
        history.push('/');
    }; 

    return (
        <Container>
                <EventContainer>
                    <img height='60' width='50%' src="https://i.imgur.com/za6JNCd.png" style={{margin: "10px auto"}}/>
                    {/* <p style={{transform: "translate(0,120%)"}}>HackTalk 1.0</p> */}
                </EventContainer>
                    
                    <ButtonGroupContainer>
                        <TextIconButton onClick={() => history.push('/main')}>
                            <Icon style={{marginRight: 10}}>
                                <MdHome size={23}/>
                            </Icon>
                            <p>Home</p>
                        </TextIconButton>
                    </ButtonGroupContainer>

                <MetisMenu content={content}/>

                <ButtonGroupContainer style={{justifyContent: 'space-between'}}>
                    <TextIconButton onClick={handleLogout}>
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

// const MenuEventos = () => {
//     const pop = (
//         <Popover id="popover-basic">
//           <Popover.Title as="h3">Teste</Popover.Title>
//           <Popover.Content>
//             Texto teste.
//           </Popover.Content>
//         </Popover>
//       );
      
//       const Popover2 = (content) => (
//         <OverlayTrigger trigger="hover" placement="right" overlay={pop}>
//           <MetisMenu content={content}/>
//         </OverlayTrigger>
//       );
      
//       return (<Popover2 />);
// }

const MenuEventos = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isListenning, setIsListenning] = useState(false);

    const id = open ? 'simple-popover' : undefined;
    var teste = null;

    const handleClick = (event) => {
        console.log(event);
        if((event.currentTarget !== teste) && (event.currentTarget !== null)){
            console.log(event.currentTarget);
            setAnchorEl(event.currentTarget);  
            teste = event.currentTarget;
            setOpen(true);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const setEventListeners = () => {
        const menus = Array.from(document.querySelectorAll('ul.metismenu-container'));
        menus.shift();
        const menuChildren = menus.map(menu => Array.from(menu.children)).flat();
        console.log(menuChildren);
        const test = [];
        menuChildren.forEach((item) => {
            // item.tooltip({ title: "Teste" });
        });
        console.log(test);
    }

    useEffect(() => {
        console.log(isListenning);
        if (!isListenning) {
            setEventListeners();
            setIsListenning(true);
        }
    },[]);

    return (
        <>
            <MetisMenu content={content}/>
        </>
    );
};