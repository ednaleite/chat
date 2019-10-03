import React from 'react'
import './App.css';
import Chatbot from './componentes/chatbot';
import {Provider} from 'react-redux'
import store from  './componentes/store'

function App() {
  return (
    <Provider store = {store}>
          <div className="conteudo">
            <Chatbot/>

            </div>
    </Provider>
    
  );
}

export default App;
