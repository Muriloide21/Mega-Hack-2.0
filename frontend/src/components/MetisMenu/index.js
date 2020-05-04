import React, { useState } from 'react';
import { FaCaretLeft, FaCaretDown } from 'react-icons/fa';
import { MdLock } from "react-icons/md";
import { useHistory } from "react-router-dom";

import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import styled from 'styled-components';

import './react-metismenu-new.css';

const PopoverButton = styled.div`
    margin-top: 10px;
    width: 80%;
    height: 33px;
    transform: translate(10%);
    border-radius: 38px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 15px;
    font-weight: bold;

    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    background: ${({available}) => available ? '#5BC34A' : '#E1DC53'};
    color: ${({available}) => available ? '#ffffff' : '#333333'};
`;

const pop = ({ title, speaker, description, n, m, available, img }) => {
    return (
    <Popover id="popover-basic">
        <Popover.Title as="h3">{title}</Popover.Title>
            <Popover.Content>
                <img width="70%" height="40%" style={{transform: "translate(22%)"}} src={img}/><br/>
                <strong>Responsável:</strong> {speaker}<br />
                <strong>Participantes:</strong> {n}/{m}<br />
                <strong>Descrição:</strong><br />
                <div style={{clear:"both", textAlign: "justify"}}>{description}</div>
                {!available &&
                    <PopoverButton available={available}>
                        <MdLock style={{marginRight: 4}}/> COMPRAR
                    </PopoverButton>
                }   
            </Popover.Content>
    </Popover>
)};

const MetisMenuContainer = styled.ul`
    height: inherit;
    background: #333333;
`;

const Icon = styled.div`
    /* pointer-events: none; */
    transition: transform 300ms;
    -webkit-transition: transform 300ms;
    position: absolute;
    right: 21px;
    top: 20px;
`;

const MetisMenuItem = ({ icon, label, to='', title, speaker, description, n, m, available, img="http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg" }) => {
    const history = useHistory();
    
    function handleClick(event) {
        event.stopPropagation();
        console.log('alo');
        history.push("/talkview");
    }

    return (
        <>
        <OverlayTrigger trigger='hover' placement="right" overlay={pop({title, speaker, description, n, m, available, img})}>
            <li style={{width: '100%'}} className="metismenu-item2" onClick={handleClick}>
                <p className="metismenu-link2">
                    {icon}&nbsp;&emsp;{label}
                </p>
            </li>
        </OverlayTrigger>
        </>
    );
};

const MetisMenuSection = ({ active, icon, label, to='', content, ...props }) => {

    const [ulClasses, setUlClasses] = useState(undefined);

    return (
        <li className="metismenu-item" style={{position: 'relative'}} {...props}>
            <p className="metismenu-link">{icon}&nbsp;&emsp;{label}</p>
            <Icon>{active ? <FaCaretDown/> : <FaCaretLeft/>}</Icon>

            {active && 
            <ul className={ulClasses}>
                {content.map((item) => {
                    return (
                        <>
                        <MetisMenuItem
                            icon={item.icon}
                            label={item.label}
                            to={item.to}
                            title={item.title}
                            speaker={item.speaker}
                            description={item.description}
                            n={item.n}
                            m={item.m}
                            available={item.available}
                            img={item.img}/>
                        </>
                    );
                })}
            </ul>
            }
        </li>
    )
};

export default function MetisMenu({ content }) {

    const [ativeSection, setActiveSection] = useState(undefined);

    const handleClick = (index) => {
        console.log('Item clicado');
        setActiveSection(ativeSection === index ? undefined : index);
    }

	return (
		<MetisMenuContainer>
            {content.map((section, index) => {
                return (<MetisMenuSection
                    key={index}
                    active={index === ativeSection}
                    icon={section.icon} 
                    label={section.label}
                    to={section.to}
                    content={section.content}
                    onClick={() => handleClick(index)}
                />)
            })}
		</MetisMenuContainer>
	);
}