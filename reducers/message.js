
import {
    GET_MESSAGES,
    CREATE_MESSAGE,
    DELETE_MESSAGE
} from '../constants/action-type'

const stateInit = {
    messages : [
        { id:1, name : 'Alan', message : 'Hi how are you ?'},
        { id: 2, name : 'Alice', message : 'Nice Are you fine ?'},
        { id : 3, name : 'Alan', message : 'Yes always'},
        { id : 4, name : 'Alice', message : 'Yes always'},
    ],
    welcome : `
    En 2012, Mark Zuckerberg a déclaré: "La plus grande erreur que nous ayons commise en tant que société a été de parier trop sur HTML par opposition au natif". 5 Il a promis que Facebook offrirait bientôt une meilleure expérience mobile.
À l'intérieur de Facebook, Jordan Walke a trouvé un moyen de générer des éléments d'interface utilisateur pour iOS à partir d'un thread JavaScript. Ils ont décidé d'organiser un Hackathon interne pour perfectionner ce prototype afin de pouvoir créer des applications natives avec cette technologie6.
Après des mois de développement, Facebook a publié la première version de la configuration JavaScript de React en 2015. Lors d'un entretien technique, 7 Christopher Chedeau a expliqué que Facebook utilisait déjà React Native en production pour son application de groupe et son application de gestionnaire de publicités8.
    [source Wikipédia]
    `
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