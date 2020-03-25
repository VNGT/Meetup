import  { USER_LOGIN, NEW_USER } from '../actions/types';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
    items: [], // represent post coming from action
    item: {}, // get response back
    errorMessage: '',
    loginError: '',
};

// action here will include the type
export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            const validData = action.payload.length > 0;
            if (validData) {
                AsyncStorage.setItem('account', JSON.stringify(action.payload[0]))
                .then(_ => {
                    return {...state, item: action.payload[0]};
                });
            } else {
                console.log('Here error');
                return {...state, loginError: 'Incorrect email or password'};
            }
        case NEW_USER:
            if (action.is_Valid) {
                AsyncStorage.setItem('account', JSON.stringify(action.payload))
                .then(_ => {
                    return {...state, item: action.payload};
                });
            } else {
                return {...state, errorMessage: action.payload.data.message};
            }
        default:
            return state;
    }
};