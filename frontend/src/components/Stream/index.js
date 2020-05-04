import React, {useState} from 'react'
import Webcam from "react-webcam";
import { useTheme } from '../../utils/ThemeContext'
import CanvasDraw from "react-canvas-draw";

import { MdMic, MdMicOff, MdVideocam, MdVideocamOff, MdLaptop, MdCancel, MdViewList, MdScreenShare, MdStopScreenShare,  } from "react-icons/md";
import { IoMdClose } from 'react-icons/io';

import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    width: 100%;
    padding: 2% 5% 0;
    background: ${({darkMode}) => darkMode ? '#293c43' : '#ffffff'};
    overflow-y: auto;
        &::-webkit-scrollbar {
            display: none;
        }
    position: relative;
`;

const Text = styled.p`
    color: ${({darkMode}) => darkMode ? '#ffffff' : '#293c43'};
    font-size: 20px;
`;

const VideoInfo = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: bold;
`;

const ManagementBarContainer = styled.div`
    width: 84%;
    position: absolute;
    bottom: 0px;  
    
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 50;
`;

const ManagementBar = styled.div`
    height: 50px;
    width: 50%;
    min-width: 300px;
  
    background: #191919;
    border-radius: 16px 16px 0px 0px;
    padding: 10px 18px 0px 18px;
  
    display: -webkit-flex;
    -webkit-justify-content: space-between;
`;

const CloseButton = styled.div`
    width: 10px;
    height: 10px;
    margin: auto;
    cursor: pointer;
    
    position: absolute;
    top: 2px;
    right: 22px;
    color: #191919;
    font-size: 20px;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    background-color: transparent;
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #446165;
    font-size: 20;
    color: white;
`;

const QuestionContainer = styled.div`
    width: 50%;
    margin-left: calc(25% + 5px);
    position: absolute;
    bottom: 0;
    padding-bottom: 15px;
    z-index: 80;
`;

const CanvasContainer = styled.div`
    width: calc(100% - 10px);
    position: absolute;
    top: 0;
    border: 4px solid;
    z-index: 10;
`;

const StreamDiv = styled.div`
    position: relative;
    width: 100%;
    background: url(https://www.streamscheme.com/wp-content/uploads/2019/11/UntitledDesign_1086435574-1-scaled.jpg);
    background-repeat: no-repeat;
    background-position: center center;
`;

export default function Stream({ management, question, handleCloseQuestion }) {
    const {themeDark} = useTheme();
    const [mic, setMic] = useState(true);
    const [cam, setCam] = useState(true);
    const [startStream, setStartStream] = useState(true);
    const [screenShare, setScreenShare] = useState(true);
    
    return (
        <Container darkMode={themeDark}>
            <Text darkMode={themeDark} style={{fontSize: '2.5rem', fontWeight:'bold', marginBottom: 10}}>
                Palestra: Isolamento e Tecnologia
            </Text>
            
            {!management 
            ? <>
                <iframe title="video" width="100%" height="500" src="https://www.youtube.com/embed/6Af6b_wyiwI?modestbranding=1&loop=1&iv_load_policy=3&color=yellow&autoplay=1&start=54" frameborder="0" showinfo='0' allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" modestbranding allowFullScreen style={{marginBottom: '1em'}} />
                <VideoInfo>
                    <Text darkMode={themeDark}>Palestrante: Bill Gates</Text>
                    <Text darkMode={themeDark}>47/50 participantes</Text>
                </VideoInfo>
                
                <Text darkMode={themeDark} style={{clear:"both", textAlign: "justify"}}>
                    Em 2014, o mundo evitou uma terrível epidemia global do Ebola, graças a milhares de generosos profissionais de saúde e, francamente, graças também a muita sorte. Em retrospectiva, sabemos o que deveríamos ter feito melhor. Então, Bill Gates sugere que agora é a hora de colocar todas as nossas boas ideias em prática, de planejamento de cenários a treinamento de profissionais de saúde. Como ele diz: "Não há razão para pânico, mas precisamos nos apressar".
                </Text>
            </>
            : <>
                <StreamDiv>
                    {(cam) ?
                        <Webcam audio={false} screenshotFormat="image/jpeg" width={'100%'} mirrored={true} style={{zIndex: 40}}/>
                        :
                        <CanvasContainer>
                            <CanvasDraw brushColor="#444" hideGrid hideInterface canvasWidth={'100%'} canvasHeight={500} brushRadius={2} lazyRadius={2}/>
                            <Webcam audio={false} screenshotFormat="image/jpeg" width={'200'} mirrored={true} style={{zIndex: 30, position: "absolute", top: 0}}/>
                        </CanvasContainer>
                    }
                    <QuestionContainer>
                        {question && 
                        <>
                            {question}
                            <CloseButton onClick={handleCloseQuestion}>
                                <IoMdClose/>
                            </CloseButton>
                        </>
                        }
                    </QuestionContainer>
                </StreamDiv>
                
                <ManagementBarContainer>
                    <ManagementBar>
                        <Icon style={{marginLeft: -8}} onClick={() => setMic(!mic)}>
                            {mic ? <MdMic size={40}/> : <MdMicOff size={40}/>}
                        </Icon>
                        <Icon onClick={() => setCam(!cam)}> 
                            {cam ? <MdVideocam size={40}/> : <MdVideocamOff size={40}/>}
                        </Icon>
                        <Icon onClick={() => setStartStream(!startStream)}>
                            {startStream? <MdLaptop size={40}/> : <MdCancel size={40}/>}
                        </Icon>
                        <Icon>
                            <MdViewList size={40}/>
                        </Icon>
                        <Icon onClick={() => setScreenShare(!screenShare)}>
                            {screenShare ? <MdScreenShare size={40}/> : <MdStopScreenShare size={40}/>}
                        </Icon>
                    </ManagementBar>
                </ManagementBarContainer>
            </>
            }
        </Container>
    );
}
