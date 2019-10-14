import React from 'react'
import {Alert,  Button} from 'reactstrap'
import './chat.css'


const ChatHeader = props => {

    function minimizar() {
        var elemento = document.getElementById("conteudo");
        elemento.style.display = 'none'; };

    return(       
        <div className='chat-header'>
          <a onClick={minimizar} id='fechar'><img src='images/imgx.png' id='imgx'/></a>
        </div>
    );
}

export default ChatHeader