import React, {Component, Fragment} from 'react'
import './App.css';
import './popup.js';
import 'jquery';
import Chatbot from './componentes/chatbot';
import {Provider} from 'react-redux'
import store from  './componentes/store'


function App() {
   
var count = 0;

function toggle() {
  var elemento = document.getElementById("conteudo");
  elemento.style.display = 'none';

  if(count%2 == 0 ){
      elemento.style.display = 'block';
      count++;
    }
  else if(count%2 != 0) {
      elemento.style.display = 'none';
      count--;
    }
};

  return (
    <div>
   

      <Provider store = {store}>
            <div id="conteudo">
              <Chatbot/>
            </div>
      </Provider>
    

      <Fragment>
        <img src="images/iracema.jpg" onClick={toggle} id="img" />
      </Fragment>
    </div>
    
    
  );
  
}

export default App;
