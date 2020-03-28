import  { USER_LOGIN, NEW_USER } from '../actions/types';

const initialState = {
    item: {}, // get response back
    errorMessage: '',
    loginError: '',
};

// action here will include the type
export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return (action.payload.length > 0)
            ? {...state, item: action.payload}
            : {...state, loginError: action.message};
        case NEW_USER:
            return (action.payload !== undefined)
            ? {...state, item: action.payload}
            : {...state, errorMessage: action.message};
        default:
            return state;
    }
};