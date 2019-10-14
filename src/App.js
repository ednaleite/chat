import React, {Component, Fragment} from 'react'
import './App.css';
import './componentes/chat/chat.css'
import 'jquery';
import Chatbot from './componentes/chatbot';
import {Provider} from 'react-redux'
import store from  './componentes/store'


function App() {

function toggle() {
  var chat = document.getElementById("conteudo");
  var icone = document.getElementById("img");

  if(!chat.style.display){
    chat.style.display = 'none';
  }

  if(chat.style.display == 'none'){
    chat.style.display = 'block';
  }

  else if(chat.style.display == 'block') {
    chat.style.display = 'none';
  }
};

  return (

    <div>
      <Provider store = {store}>
        <div id='imgchat'>
            <div id="conteudo">
              <Chatbot/>
            </div>
            
             <img src="images/iracema.jpg" onClick={toggle} id="img" />
             
        </div>
      </Provider>
    </div>
  );
}

export default App;
