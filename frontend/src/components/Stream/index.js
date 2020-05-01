import React from 'react'

// import './styles.css'

import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    padding: 2% 5%;
    background: ${({darkMode}) => darkMode ? '#293c43' : '#ffffff'};
    overflow-y: auto;
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

export default function Stream() {
    const darkMode = true;

    return (
        <Container darkMode={darkMode}>
            <Text darkMode={darkMode} style={{fontSize: '3rem', fontWeight:'bold', marginBottom: 10}}>
                Título do Vídeo
            </Text>
            
            <iframe title="video" width="100%" height="500" src="https://www.youtube.com/embed/6Af6b_wyiwI?modestbranding=1&loop=1&iv_load_policy=3&color=yellow" frameborder="0" showinfo='0' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" modestbranding allowFullScreen style={{marginBottom: '1em'}} />

            <VideoInfo>
                <Text darkMode={darkMode}>Instrutor fulano</Text>
                <Text darkMode={darkMode}>47/50 participantes</Text>
            </VideoInfo>
            
            <Text darkMode={darkMode} style={{clear:"both", textAlign: "justify"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus amet, aliquam pellentesque enim. In euismod tincidunt purus condimentum et platea arcu facilisis. Tincidunt massa enim, porttitor praesent mi blandit eget. Vel urna leo odio metus dis tortor tortor nibh. Nunc rhoncus lectus feugiat consequat purus sed risus aliquam. Non egestas molestie urna tristique.
            </Text>
        </Container>
    );
}
