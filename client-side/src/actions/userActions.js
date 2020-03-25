import { USER_LOGIN } from './types';
import  Https from '../services/Https';

// dispatch is same as resolver in promise use to return
// include type (mandatory), payload
export const userLogin = (email, password, navigation) => dispatch => {
    Https.POST('account/verify', { email, password })
    .then(res => res.data)
    .then(data => {
        if (data.length > 0) {
            navigation.navigate('DashboardPage');
        }
        return dispatch({ type: USER_LOGIN, payload: data});
    });
};