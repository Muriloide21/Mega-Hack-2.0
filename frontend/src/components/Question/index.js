import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { MdQuestionAnswer } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
// import './styles.css';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    -webkit-align-items:center;
    justify-content: space-between;

    width: 100%;
    height: 90px;
    margin-bottom: 15px;
`;

const QuestionContainer = styled.div`
    height: 100%;
    width: 100%;
    min-height: 90px;

    background: white;
    border-radius: 4px;

    display: flex;
    margin-right: 10px;
    position: relative;
`;

const TextFields = styled.div`
    flex: 1;
    padding: 10px 5px;
    word-break: break-all;
    overflow-y: auto;
`;

const FeedButtons = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Button = styled.div`
    height: ${({size}) => `${size}px`};
    width: ${({size}) => `${size}px`};

    background: ${({color}) => color};
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const ImageContainer = styled.div`
    width: 75px;
    /* height: 100%; */

    display: flex;
    align-items: center;
    /* -webkit-align-items:center; */
    justify-content: center;
`;

const Image = styled.img`
    width: 60px;
    height 60px;
    border-radius: 50%;
`;

const VotesCounter = styled.div`
    position: absolute;
    top: 2px;
    right: 5px;
    font-size: 15px;

    display: flex;
    align-items: center;
`;

export default function Question({ user, question_text, management, handleSelect, handleDelete, view, socket, upvotes, downvotes}) {
    // const [upVotes,setUpVotes] = useState(0);
    // const [downVotes,setDownVotes] = useState(0);
    const [lastVote, setLastVote] = useState(undefined);

    //Evita múltiplos votos
    const handleUpVote = () => {
        if (lastVote !== 'up') {
            setLastVote('up');
            // setUpVotes(upVotes+1);
            socket.emit('voteQuestion', {question: {user, text: question_text}, vote: true, change_vote: !!lastVote});
        }
    }

    const handleDownVote = () => {
        if (lastVote !== 'down') {
            setLastVote('down');
            // setDownVotes(downVotes+1);
            socket.emit('voteQuestion', {question: {user, text: question_text}, vote: false, change_vote: !!lastVote});
        }
    }

    return (
        <Container>
            <QuestionContainer>
                <ImageContainer>
                    <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQG5sBqLXqEasg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=VDwSJ8NWFhHmfDkni1SLDXRxup1vbTAlstuRzS1D1Sc"/>
                </ImageContainer>

                <TextFields>
                    <strong>{user}</strong>
                    <br/>
                    <text>{question_text}</text>
                </TextFields> 

                {(!view && management) &&
                    <>
                    <VotesCounter>
                        <strong style={{color: '#28A745', marginRight: 5}}>{upvotes ?? 0}</strong>
                        <FaThumbsUp style={{color: '#28A745', marginRight: 10, marginBottom: 5}} size={15}/>
                        
                        <strong style={{color: '#C61A1A', marginRight: 5}}>{downvotes ?? 0}</strong>
                        <FaThumbsDown style={{color: '#C61A1A', marginTop: 1}} size={15}/>
                    </VotesCounter>
                    </>
                }
            </QuestionContainer> 

            {!view &&
                <FeedButtons>
                    {!management
                    ?<>
                        <Button color='#28A745' size={40} onClick={handleUpVote}>
                            <FaThumbsUp color={lastVote === 'up' ? 'white' : '#333333'} size={25}/>
                        </Button>
                        <Button color='#C61A1A' size={40} onClick={handleDownVote}>
                            <FaThumbsDown color={lastVote === 'down' ? 'white': '#333333'} size={25}/>
                        </Button>
                    </>:<>
                        <Button color='#28A745' size={40} onClick={handleSelect}>
                            <MdQuestionAnswer color='white' size={25}/>
                        </Button>
                        <Button color='#C61A1A' size={40} onClick={handleDelete}>
                            <BsTrash size={25}/>
                        </Button>
                    </>}
                </FeedButtons>
            }
        </Container>
    );
}