import React from 'react'

import Tabs from './Tabs';
import QuestionList from '../../components/QuestionList'

import './styles.css'

export default function InteractiveBar() {
    return (
        <>
            <div className="painel">
                <Tabs>
                    <div label="Perguntas">
                        <div className="perguntas"> 
                            <QuestionList />
                        </div>
                    </div>
                    <div label="Chat">
                        
                    </div>
                    <div label="Usuários">
                        
                    </div>
                    <div label="Anotações">
                        
                    </div>
                </Tabs>
            </div>
        </>
    );
}
