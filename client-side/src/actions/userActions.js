import { USER_LOGIN, NEW_USER } from './types';
import Https from '../services/Https';
import AsyncStorage from '@react-native-community/async-storage';

// dispatch is same as resolver in promise use to return
// include type (mandatory), payload
export const userLogin = (email, password, navigation) => dispatch => {
    Https.POST('account/verify', { email, password })
    .then(res => res.data)
    .then(data => {
        if (data.length > 0) {
            AsyncStorage.setItem('account', JSON.stringify(data[0]))
            .then(_ => {
                navigation.navigate('DashboardPage');
                return dispatch({ type: USER_LOGIN, payload: data[0]});
            });
        } else {
            return dispatch({ type: USER_LOGIN, payload: [], message: 'Incorrect email or password'});
        }
    });
};

// Main user signup action logic
export const userSignup = (email, firstname, lastname, password, navigation) => async dispatch => {
    const dataObj = { email, firstname, lastname, password};
    Https.POST('account', dataObj)
    .then(data => {
        const clientData = data.data;
        if (data.status) {
            AsyncStorage.setItem('account', JSON.stringify(clientData))
            .then(_ => {
                navigation.navigate('DashboardPage');
                return dispatch({ type: NEW_USER, payload: clientData });
            });
        } else {
            return dispatch({ type: NEW_USER, message: clientData.message });
        }
    });
};