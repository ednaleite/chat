import React, {Component} from 'react'
import {InputGroup, Input, InputGroupAddon, Button} from 'reactstrap'
import {connect} from 'react-redux'
import {enviaMensagem} from '../store/actions/chat'
import {conversaWatson} from './../store/actions/watson'


class ChatMensagem extends Component{
   constructor(props){
       super(props)
       this.inputEnviaTexto = this.inputEnviaTexto.bind(this)
       this.props.conversaWatson("inicio", "")
   }

   inputEnviaTexto(e){
    if (e.keyCode === 13) {
        console.log(e.target.value)
        const mensagem = {
            texto: e.target.value,
            origem: 'user'
        }
        
        let contexto = {}
        console.log('negocio', this.props.resposta)
        if (this.props.resposta.data && this.props.resposta.data.context) {
            contexto = this.props.resposta.data.context
        }

        this.props.enviaTexto(mensagem)
        this.props.conversaWatson(mensagem, contexto)
        e.target.value = ''
     }
   }


    render(){
        return(
            <div className='chat-mensagem'>
                <hr/>
                <InputGroup>
                <Input onKeyDown={this.inputEnviaTexto} placeholder=' Digite sua mensagem'/>
               <InputGroupAddon addonType='append'>
                   <Button color='success'>Enviar</Button>
               </InputGroupAddon>
                </InputGroup>
            </div>
        );
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return{
        enviaTexto: (msg) => dispatch(enviaMensagem(msg)),
        conversaWatson: (msg, contexto) => dispatch(conversaWatson(msg, contexto))
    }
}

const mapStateToProps = (state) => {
    return{
        resposta: state.watson.respostas
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatMensagem)