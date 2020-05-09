import { combineReducers } from 'redux'
const user = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                username: action.value
            }
        default:
            return state
    }
}

const shop = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            const shop = [ ...state ]
            shop.splice(action.value, 1)
            return shop
        default:
            return state
    }
}


export default combineReducers({ shop, user, })