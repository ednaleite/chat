import axios from  'axios'
import {enviaMensagem} from './chat'


export const conversaWatsonRequest = () => {
    return{
        type: 'CONVERSA_WATSON_REQUEST',
        carregando: true,
        erro: false
    }
}

export const conversaWatsonSucess = (respostas) =>{
    return{
        type: 'CONVERSA_WATSON_SUCESS',
        respostas,
        carregando: false,
        erro: false
    }
}

export const conversaWatsonError = () => {
    return{
        type: 'CONVERSA_WATSON_ERROR',
        carregando: false,
        erro: true
    }
}




export const conversaWatson = ((mensagem, contexto) => {
    return dispatch => {
        dispatch(conversaWatsonRequest())
        //chama o back do watson      
        const url = 'http://localhost:5000/chatbot-8da63/us-central1/conversa'
        axios.get(url,{ input: mensagem.texto, context: contexto })
        .then((data) => {
            dispatch(conversaWatsonSucess(data))
            const msg = {
                texto: data.data.output.text[0],
                origem: 'bot'
            }
             
            dispatch(enviaMensagem(msg))
        })
        .catch(() => dispatch(conversaWatsonError()))
    }
})


// conversaWatson(mensagem, contexto)

// conversaWatsonRequest() => 
// conversaWatsonSucess(resposta)
// conversaWatsonError()

