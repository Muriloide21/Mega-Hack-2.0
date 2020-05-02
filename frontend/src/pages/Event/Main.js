import React, { Component } from 'react';

import InteractiveBar from '../../components/InteractiveBar';
import Stream from '../../components/Stream';
import TalksList from '../../components/TalksList';

import styled from 'styled-components';

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
    height: 300px;
    display: flex;
    flex-flow: column;
`;

const VideoList = styled.div`
    display: flex;
    justify-content: center;
    height: 300px;
    width: calc(100%-70px);
    overflow-x: auto;
`;

const Schedule = styled.div`


`;

const Sponsors = styled.div`
`;

const SponsorsBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`;

class Image extends Component{
    render(){
        return(
        <>
            <img src={this.props.src} width={this.props.size} height={this.props.size} style={{paddingLeft: 20}}/>
        </>
        )
    }
}

export default function Main(){
    return (
        <Container>
            <TalksList />
            <Content darkMode="true" >
                <VideoContainer>
                    <text> Acontendo agora </text>
                    <VideoList>
                        <img src="http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg"/>
                        <img src="http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg"/>
                        <img src="http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg"/>
                        <img src="http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg"/>
                        <img src="http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg"/>
                    </VideoList>
                </VideoContainer>
    
                <VideoContainer>
                    <text> Ainda Hoje </text>
                    <VideoList>
                        <img src="http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg"/>
                        <img src="http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg"/>
                        <img src="http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg"/>
                        <img src="http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg"/>
                        <img src="http://img.youtube.com/vi/6Af6b_wyiwI/0.jpg"/>
                    </VideoList>
                </VideoContainer>

                <Schedule>
                    <text> Agenda </text>
                </Schedule>

                <Sponsors>
                    <text> Patrocinadores </text>
                    <SponsorsBox>
                        <Image size={70} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"/>
                        <Image size={70} src="https://www.stickpng.com/assets/images/58e383a9204d556bbd97b149.png"/>
                        <Image size={70} src="https://logodownload.org/wp-content/uploads/2014/04/coca-cola-logo-1-1.png"/>
                    </SponsorsBox>
                </Sponsors>
            </Content>
        </Container>
    );
}

