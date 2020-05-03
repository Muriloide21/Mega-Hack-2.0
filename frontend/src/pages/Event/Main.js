import React, { Component } from 'react';
import { useTheme } from '../../utils/ThemeContext'
import { useHistory } from "react-router-dom";
import Coverflow from 'react-coverflow';

import TalksList from '../../components/TalksList';

import ScheduleImage from '../../assets/unknown.png'

import styled from 'styled-components';

import './styles.css';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`;

const Content = styled.div`
    flex: 1;
    width: 100%;
    padding: 2% 5% 0;
    background: ${({darkMode}) => darkMode ? '#293c43' : '#ffffff'};
    overflow-y: auto;
    /* &::-webkit-scrollbar {
        display: none;
    } */
    position: relative;
    color: ${({darkMode}) => darkMode ? '#ffffff' : '#293c43'};
    text-align: center;
    font-size: 35px;
`;

const VideoContainer = styled.div`
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 5px;
    display: flex;
    flex-flow: column;
    align-items: center;
    // background: ${({darkMode}) => darkMode ? '#293c43' : '#ffffff'};
`;

// const VideoList = styled.div`
//     display: flex;
//     justify-content: left;
//     border-radius: 5px;
//     height: 300px;
//     width: 100%;
//     overflow-x: auto;
//     animation: scroll 10s linear infinite;

//     background: white;
//     padding: 8px;

//     &:hover {
//         animation-play-state: paused;
//     }
// `;

const Schedule = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const Sponsors = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const SponsorsBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`;

const Title = styled.p`
    margin-bottom: 10px;

    color: ${({darkMode}) => darkMode ? 'white' : 'black'};
    font-size: 2rem;
    font-weight: bold;
    text-align: start;
`;

class SponsorImage extends Component{
    render(){
        return(
            <img alt="" src={this.props.src} width={this.props.size} height={this.props.size} style={{paddingLeft: 20}}/>
        )
    }
}

// class VideoImage extends Component{
//     render(){
//         return(
//             <img alt="" src={this.props.src} width={400} style={{paddingRight: 20, objectFit: 'cover', cursor: 'pointer'}} onClick={this.props.onClick}/>
//         )
//     }
// }

export default function Main(){
    const history = useHistory();
    const { themeDark, setTheme } = useTheme();

    setTheme(themeDark)//Só pra tirar o warning

    var menu1 = 90;
    var menu2 = 90;

    return (
        <Container>
            <TalksList />
            
            <Content darkMode={themeDark}>

                <VideoContainer>
                    <Title darkMode={themeDark}> Acontecendo agora </Title>

                    <Coverflow
                        width={1260}
                        height={400}
                        infiniteScroll={true}
                        displayQuantityOfSide={2}
                        navigation={false}
                        enableHeading={false}
                        enableScroll={false}
                        active={0}
                    >
                        <div>
                            <img
                                src='http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg'
                                alt='Palestra 4'
                                style={{ display: 'block', width: '100%' }}
                                onClick={() => {menu1 === 0 ? history.push("/talkview") : menu1 = 0}}
                            />
                        </div>
                        <img src='http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg' alt='Palestra 4' onClick={() => {menu1 === 1 ? history.push("/talkview") : menu1 = 1}} />
                        <img src='http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg' alt='Palestra 4' onClick={() => {menu1 === 2 ? history.push("/talkview") : menu1 = 2}} />
                        <img src='http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg' alt='Palestra 4' onClick={() => {menu1 === 3 ? history.push("/talkview") : menu1 = 3}} />
                        <img src='http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg' alt='Palestra 4' onClick={() => {menu1 === 4 ? history.push("/talkview") : menu1 = 4}} />
                    </Coverflow>


                    {/* <VideoList darkMode={themeDark}>
                        {Array(6).fill(<VideoImage src="http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg" onClick={() => history.push("/talkview")}/>)}
                    </VideoList> */}
                </VideoContainer>
                <br />

                <VideoContainer>
                    <Title darkMode={themeDark}> Ainda Hoje </Title>
                    <Coverflow
                        width={1260}
                        height={400}
                        infiniteScroll={true}
                        displayQuantityOfSide={2}
                        navigation={false}
                        enableHeading={false}
                        enableScroll={false}
                        active={0}
                    >
                        <div>
                            <img
                                src='http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg'
                                alt='Palestra 4'
                                style={{ display: 'block', width: '100%' }}
                                onClick={() => {menu2 === 0 ? history.push("/talkview") : menu2 = 0}}
                            />
                        </div>
                        <img src='http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg' alt='Palestra 4' onClick={() => {menu2 === 1 ? history.push("/talkview") : menu2 = 1}} />
                        <img src='http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg' alt='Palestra 4' onClick={() => {menu2 === 2 ? history.push("/talkview") : menu2 = 2}} />
                        <img src='http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg' alt='Palestra 4' onClick={() => {menu2 === 3 ? history.push("/talkview") : menu2 = 3}} />
                        <img src='http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg' alt='Palestra 4' onClick={() => {menu2 === 4 ? history.push("/talkview") : menu2 = 4}} />
                    </Coverflow>

                    {/* <VideoList darkMode={themeDark}>
                        {Array(6).fill(<VideoImage src="http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg" onClick={() => history.push("/talkview")}/>)}
                    </VideoList> */}
                </VideoContainer>
                <br />

                <Schedule>
                    <Title darkMode={themeDark}>Agenda</Title>
                    <img alt="" src={ScheduleImage}/>
                </Schedule>
                <br />

                <Sponsors>
                    <Title darkMode={themeDark}>Patrocinadores</Title>

                    <SponsorsBox>
                        <SponsorImage size={70} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"/>
                        <SponsorImage size={70} src="https://www.stickpng.com/assets/images/58e383a9204d556bbd97b149.png"/>
                        <SponsorImage size={70} src="https://logodownload.org/wp-content/uploads/2014/04/coca-cola-logo-1-1.png"/>
                    </SponsorsBox>
                </Sponsors>
            </Content>
        </Container>
    );
}

