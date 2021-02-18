import {
    SET_FEED,
    SET_MESSAGES_HISTORY
} from './action'

const InitalState = {
    feed : null,
    messagesHistory : []
}

const Reducer = (state = InitalState, action) => {
    switch (action['type']) {
        case SET_FEED :
            return {
                ...state,
                feed : action['feed']
            }
        case SET_MESSAGES_HISTORY :
            return {
                ...state,
                messagesHistory : action['messagesHistory']
            } 
        default:
            return state
    }
}

export default Reducer