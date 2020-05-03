import React, { useState } from 'react';
import { FaCaretLeft, FaCaretDown } from 'react-icons/fa';

import Athus from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import Popover from 'react-awesome-popover'

import styled from 'styled-components';

import './react-metismenu-new.css';

const pop = (
    <Athus id="popover-basic">
        <Athus.Title as="h3">Teste</Athus.Title>
            <Athus.Content>
                <strong>Responsável:</strong> Athus Cavalini<br />
                <strong>Participantes:</strong> 12/45<br />
                <strong>Descrição:</strong><br />
                Tralalalala
            </Athus.Content>
    </Athus>
);

const MetisMenuContainer = styled.ul`
    height: inherit;
    background: #333333;
`;

const Icon = styled.div`
    /* pointer-events: none; */

    position: absolute;
    right: 21px;
    top: 20px;
`;

const MetisMenuItem = ({ icon, label, to='' }) => {
    return (
        <>
        <OverlayTrigger trigger="click" placement="right" overlay={pop}>
            <li style={{width: '100%'}}className="metismenu-item">
                <p className="metismenu-link">
                    {icon}
                    {label}
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
    const [ulClasses, setUlClasses] = useState(`metismenu-container ${active ? 'visible': ''}`);

    return (
        <li className="metismenu-item" style={{position: 'relative'}} {...props}>
            <p className="metismenu-link">{icon}{label}</p>
            <Icon>{active ? <FaCaretDown/> : <FaCaretLeft/>}</Icon>

            {active && 
            <ul className={ulClasses}>
                {content.map((item) => {
                    return (
                    <Popover action="hover" placement="right-center">
                        <MetisMenuItem 
                            icon={item.icon} 
                            label={item.label} 
                            to={item.to}
                        />
                        <div style={{background: 'white', width: 100, height: 100}}></div>
                    </Popover>);
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