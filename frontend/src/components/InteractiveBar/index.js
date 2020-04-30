import React from 'react'

import Tabs from './Tabs';
import QuestionList from '../../components/QuestionList'
import ChatBox from '../../components/ChatBox'
import Notes from '../../components/Notes'
import UserBuble from '../../components/UserBuble'

import { FaCommentAlt, FaListUl, FaUserAlt, FaStickyNote } from "react-icons/fa";

import './styles.css'

export default function InteractiveBar() {
    return (
        <>
            <div className="painel">
                <Tabs>
                    <div label={<FaListUl />}>
                        <div className="perguntas"> 
                            <QuestionList />
                        </div>
                    </div>
                    <div label={<FaCommentAlt />}>
                        <div className="chat"> 
                            <ChatBox />
                        </div>
                    </div>
                    <div label={<FaUserAlt />}>
                        <div className="users">
                            <div className="users-title">

                            </div>
                            <div className="users-list-div">
                                <ul className="users-list">
                                    <li className="users-list-item"><UserBuble /></li>
                                    <li className="users-list-item"><UserBuble /></li>
                                    <li className="users-list-item"><UserBuble /></li>
                                    <li className="users-list-item"><UserBuble /></li>
                                    <li className="users-list-item"><UserBuble /></li>
                                    <li className="users-list-item"><UserBuble /></li>
                                    <li className="users-list-item"><UserBuble /></li>
                                    <li className="users-list-item"><UserBuble /></li>
                                    <li className="users-list-item"><UserBuble /></li>
                                    <li className="users-list-item"><UserBuble /></li>
                                    <li className="users-list-item"><UserBuble /></li>
                                    <li className="users-list-item"><UserBuble /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div label={<FaStickyNote />}>
                        <div className="notes">
                            <Notes />
                        </div>
                    </div>
                </Tabs>
            </div>
        </>
    );
}
