import { 
    CREATE_MESSAGE, 
    DELETE_MESSAGE, 
} from '../constants/action-type'


export const createMessage = (payload) => {
    return { 
        type: CREATE_MESSAGE, payload 
    }
};

export const getMessages = () => {
    return { 
        type: GET_MESSAGES 
    }
};

export const deleteMessage = () => {
    return { 
        type: DELETE_MESSAGE 
    }
};