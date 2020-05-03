import React, { useState } from 'react';
import { FaCaretLeft, FaCaretDown } from 'react-icons/fa';

import Athus from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import Popover from 'react-awesome-popover'

import styled from 'styled-components';

import './react-metismenu-new.css';

const pop = ({ title, speaker, description, n, m }) => {
    return (
    <Athus id="popover-basic">
        <Athus.Title as="h3">{title}</Athus.Title>
            <Athus.Content>
                <strong>Responsável:</strong> {speaker}<br />
                <strong>Participantes:</strong> {n}/{m}<br />
                <strong>Descrição:</strong><br />
                {description}
            </Athus.Content>
    </Athus>
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

const MetisMenuItem = ({ icon, label, to='', title, speaker, description, n, m }) => {
    return (
        <>
        <OverlayTrigger trigger="hover" placement="right" overlay={pop({title, speaker, description, n, m})}>
            <li style={{width: '100%'}} className="metismenu-item2" onClick={() => console.log("alo")}>
                <p className="metismenu-link2">
                    {icon}&nbsp;&emsp;{label}
                </p>
            </li>
        </OverlayTrigger>
            {/* <Popover action="hover" placement="top">
                <button>click me</button>
                <div style={{background: 'white', width: 100, height: 100}}></div>
            </Popover> */}
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
                    {/* //<Popover action="hover" placement="right-center"> */}
                        <MetisMenuItem 
                            icon={item.icon} 
                            label={item.label} 
                            to={item.to}
                            title={item.title} 
                            speaker={item.speaker}
                            description={item.description}
                            n={item.n}
                            m={item.m}/>
                        {/* <div style={{background: 'white', width: 100, height: 100}}>
                        </div> */}
                    {/* </Popover> */}
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

// const MetisSubItens = (content) => {
//     const pop = (
//         <Popover id="popover-basic">
//             <Popover.Title as="h3">Teste</Popover.Title>
//                 <Popover.Content>
//                     <strong>Responsável:</strong> Athus Cavalini<br />
//                     <strong>Participantes:</strong> 12/45<br />
//                     <strong>Descrição:</strong><br />
//                     Tralalalala
//                 </Popover.Content>
//         </Popover>
//     );

//     return (<OverlayTrigger trigger="click" placement="right" overlay={pop}>
//       {content}
//     </OverlayTrigger>)
// };