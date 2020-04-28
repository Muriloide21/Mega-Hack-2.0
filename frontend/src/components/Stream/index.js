import React from 'react'

import './styles.css'


export default function Stream() {
    return (
        <>
            <div className="stream-container">
                <h1>Título do Vídeo</h1>
                <iframe title="video" width="100%" height="500" src="https://www.youtube.com/embed/6Af6b_wyiwI" frameborder="0" showinfo="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" modestbranding allowfullscreen></iframe>
                <div className="speaker-name">Instrutor fulano</div>
                <div className="viewers">47/50 participantes</div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus amet, aliquam pellentesque enim. In euismod tincidunt purus condimentum et platea arcu facilisis. Tincidunt massa enim, porttitor praesent mi blandit eget. Vel urna leo odio metus dis tortor tortor nibh. Nunc rhoncus lectus feugiat consequat purus sed risus aliquam. Non egestas molestie urna tristique.
                </div>
            </div>

        </>
    );
}
