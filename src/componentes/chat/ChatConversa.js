import React, {Component} from 'react'
import {Alert,Badge} from 'reactstrap'
import {connect} from 'react-redux'
import '../chat/chat.css';


class ChatConversa extends Component{
   
   renderMensagem(msg,k){
         return (
            <div key = {k}>
          {
              msg.origem === "user" && <span>
                  <div className='usuario'>
              <Badge color='info' id="usertalk">Você disse</Badge>
              <Alert color='info'>{msg.texto}</Alert>
                 </div>
              </span>
          }

          {
            msg.origem === "bot" && <span>
                <div className='iracema'>
            <Badge color='dark'>Iracema disse</Badge>
            <Alert color='dark'>{msg.texto}</Alert>
            </div>
            </span>
          }
             </div>
      )

 }
   
   
    render(){
        return(
            <div className='chat-conversa'>
                {
                   Object.keys(this.props.mensagens).map(key => {
                        return this.renderMensagem(this.props.mensagens[key],key)
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        mensagens: state.chat.mensagens
    }
}

export default connect(mapStateToProps, null)(ChatConversa)