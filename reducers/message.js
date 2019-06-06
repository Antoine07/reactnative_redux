
import {
    GET_MESSAGES,
    CREATE_MESSAGE,
    DELETE_MESSAGE
} from '../constants/action-type'

const stateInit = {
    messages : [
        { name : 'Alan', message : 'Hi how are you ?'},
        { name : 'Alice', message : 'Nice Are you fine ?'},
        { name : 'Alan', message : 'Yes always'},
    ]
}

export default (state = stateInit, action = {}) => {

    switch(action.type){

        case GET_MESSAGES:

            return {
                ...state
            }

        case CREATE_MESSAGE:

            const messages = state.messages
            messages.push(action.payload)
            
            console.log({
                ...state, 
                ...messages
            })
            
            return {
                ...state, 
                ...messages
            }
    
        default:

            return state;
    }
}