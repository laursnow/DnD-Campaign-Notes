import LOGIN from '../actions';
import LOGOUT from '../actions';

let initialState = {
    isLoggedIn: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: 
        return Object.assign({}, {isLoggedIn: true}, ...state);
        case LOGOUT: 
        return Object.assign({}, {isLoggedIn: null}, ...state);
        default: return state;
    }
}

export default reducer