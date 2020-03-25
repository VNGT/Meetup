import  { USER_LOGIN, NEW_USER } from '../actions/types';
import { AsyncStorage } from 'react-native';

const initialState = {
    items: [], // represent post coming from action
    item: {} // get response back
};

// action here will include the type
export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            if (action.payload.length > 0) {
                AsyncStorage.setItem('account', JSON.stringify(action.payload[0]));
            }
            return {
                ...state,
                items: action.payload[0]
            }
        default:
            return state;
    }
};