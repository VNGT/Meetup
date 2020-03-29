import  { CREATE_EVENT, UPDATE_EVENT, GET_ALL_EVENTS } from '../actions/types';
import Https from '../services/Https';
import AsyncStorage from '@react-native-community/async-storage';

export const getAllEvent = () => async dispatch => {
    Https.GET('event')
    .then(data => data.data)
    .then(res => {
        console.log(res);
        await AsyncStorage.setItem('events', res);
        return dispatch({ type: GET_ALL_EVENTS, payload: res });
    });
};

export const createEvent = () => dispatch => {

};