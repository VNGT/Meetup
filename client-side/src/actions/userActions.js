import { USER_LOGIN, NEW_USER } from './types';
import Https from '../services/Https';

// dispatch is same as resolver in promise use to return
// include type (mandatory), payload
export const userLogin = (email, password, navigation) => dispatch => {
    Https.POST('account/verify', { email, password })
    .then(res => res.data)
    .then(data => {
        if (data.length > 0) { navigation.navigate('DashboardPage'); }
        return dispatch({ type: USER_LOGIN, payload: data});
    });
};

// Main user signup action logic
export const userSignup = (email, firstName, lastName, password, navigation) => dispatch => {
    const dataObj = { email, firstName, lastName, password};
    Https.POST('account', dataObj)
    .then(data => {
        if (data.status) {
            navigation.navigate('DashboardPage');
            return dispatch({ type: NEW_USER, payload: dataObj, is_Valid: true});
        } else {
            return dispatch({ type: NEW_USER, payload: data, is_Valid: false});
        }
    });
};