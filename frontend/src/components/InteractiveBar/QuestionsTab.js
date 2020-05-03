import React, { useState, useRef, useEffect } from 'react';
import { MdSend } from "react-icons/md";

import Question from '../../components/Question';
import { UserService } from '../../utils/UserService';

import styled from 'styled-components';

const TextArea = styled.textarea`
    flex: 1;
    height: 89%;
    resize: none;

    border-radius: 4px;
    padding: 5px;
    font-size: 15px;
`;

const List = styled.div`
    overflow-y: auto;
    height: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const MakeQuestion = styled.div`
    height: 90px;
    padding-top: 15px;

    display: flex;
    align-items: center;
    justify-content:space-between;
`;

export default function QuestionsTab({ socket, onScreen, management}) {
    const user = UserService.getEmail();
    const textRef = useRef();

    const testQuestions = [{user: 'Vinicius', text: 'Pergunta genérica aqui', upvotes: 0, downvotes: 0},
    {user: 'Athus', text: 'Pergunta genérica aqui', upvotes: 0, downvotes: 0},
    {user: 'Matheus', text: 'Pergunta genérica aqui', upvotes: 0, downvotes: 0}]
    
    const [questions, setQuestions] = useState([
        {user: 'Vinicius', text: 'Pergunta genérica aqui', upvotes: 0, downvotes: 0},
        {user: 'Athus', text: 'Pergunta genérica aqui', upvotes: 0, downvotes: 0},
        {user: 'Matheus', text: 'Pergunta genérica aqui', upvotes: 0, downvotes: 0},
    ]);
    
    useEffect(() => {
        if(socket){
            if(!management){

            }else{
                socket.on('voteQuestion', computeVote)
            }
            socket.on('new_message', newMessage)
        }
    },[socket,questions]);

    function newMessage(question) {
        if (user !== question.user)
            setQuestions([...questions, {user: question.user, text: question.text, upvotes: 0, downvotes:0}])
    }

    function computeVote({ question, vote, change_vote }){ 
        for (let q in questions){
            var temp = {user: questions[q].user, text: questions[q].text}
            if(JSON.stringify(temp) === JSON.stringify(question)){
                var temp2 = Object.assign({}, questions[q]);
                questions.splice(q, 1);
                if(vote){
                    temp2.upvotes += 1;
                    if (change_vote) temp2.downvotes -= 1;
                }else{
                    temp2.downvotes += 1;
                    if (change_vote) temp2.upvotes -= 1;
                }
                setQuestions([...questions, temp2])
                console.log(questions)
            }
        }
    }

    const handleAddQuestion = () => {
        if(textRef.current.value.length > 0) {
            setQuestions(questions.concat({
                user,
                text: textRef.current.value
            }))
            socket.emit('new_message', {user ,text: textRef.current.value});
        }
        
        textRef.current.value = '';
        textRef.current.focus();
    }
    
    return (
    <>
        <List>
            {questions.map((question,index) => {
                const handleDelete = (question_index) => {
                    setQuestions(questions.filter((_,i) => i !== question_index));
                }

                const selectQuestionOnScreen = (question_index) => {
                    onScreen(question.user,question.text);
                    handleDelete(question_index);
                }

                return (
                    <Question 
                        key={Math.random()} 
                        user={question.user} 
                        question_text={question.text}
                        management={management} 
                        handleSelect={() => selectQuestionOnScreen(index)}
                        handleDelete={() => handleDelete(index)}
                        socket={socket}
                        upvotes={question.upvotes}
                        downvotes={question.downvotes}
                    />
                )
            }
                
            )}
        </List>

        {!management &&
            <MakeQuestion>
                <TextArea ref={textRef} placeholder="Insira sua pergunta aqui..."/>    
                <MdSend 
                    size={25} 
                    style={{cursor: "pointer", width: 50, color: 'white'}} 
                    onClick={handleAddQuestion}
                />
            </MakeQuestion>
        }
    </>
  );
}

