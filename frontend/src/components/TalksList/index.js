import React from 'react'
import ReactDOM from 'react-dom';
import MetisMenu from 'react-metismenu';
import { MdHome, MdPermIdentity } from 'react-icons/md'
import { AiTwotoneSetting } from 'react-icons/ai'

// import { faHome } from "@fortawesome/free-solid-svg-icons";


import './styles.css'
import './react-metismenu-standart.css'


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
        icon: 'spinner fa-spin',
        label: 'Exposições',
        content: [
            {
                icon: 'icon-class-name',
                label: 'Exposição 1',
                //to: '#another-link',
            },
            {
                icon: 'icon-class-name',
                label: 'Exposição 2',
                //to: '#another-link',
            },
            {
                icon: 'icon-class-name',
                label: 'Exposição 3',
                //to: '#another-link',
            }
        ],
    }
];

export default function TalksList() {

    return (
        <>
            <div className="outer-div">
                <div className="container-home">
                    <div className="home-btn">
                        <div className="home-icon"><MdHome/></div>
                        <div className="home-text">Home</div>
                    </div>
                </div>
                <div className="event-name">Nome do evento</div>
                <MetisMenu content={content}/>
                <div className="wheelfoot">
                    <div className="wf-container">
                        <div className="wf-icon"><MdPermIdentity/></div>
                        <div className="wf-text"><strong>Logout</strong></div>
                        <div className="wf-settings"><div className="icon-set"><AiTwotoneSetting/></div></div>
                    </div>
                </div>
            </div>
        </>
    );
}
