import React, {Component} from 'react';
import ChatHeader from './chat/ChatbotHeader';
import ChatMensagem from './chat/ChatMensagem';
import ChatConversa from './chat/ChatConversa';
import './chat/chat.css';


class Chatbot extends Component{
    render(){
        return( 
            <div className="chatbot">
                <div className='chat-conteudo'>
                <ChatHeader/>
                <ChatConversa/>
                <ChatMensagem/>
                </div> 
               
            </div>
       
        );
    }
}

export default Chatbot