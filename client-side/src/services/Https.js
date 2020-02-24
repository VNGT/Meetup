import axios from 'react-native-axios';
const baseURL = 'https://u1j72jxymf.execute-api.us-east-1.amazonaws.com/dev/v1/';
// const baseURL = "http://localhost:3000/v1/"

exports.GET = (path) => {
    return new Promise(resolve => {
        axios.get(`${baseURL}${path}`)
        .then(response => resolve(response))
        .catch(err => resolve(err));
    });
};

exports.POST = (path, params) => {

};

exports.UPDATE = (path, params) => {

};

exports.DELETE = (path, id) => {

};