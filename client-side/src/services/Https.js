import axios from 'react-native-axios';
const baseURL = 'https://u1j72jxymf.execute-api.us-east-1.amazonaws.com/dev/v1/';
// const baseURL = "http://localhost:3000/v1/"
const querystring = require('querystring');

exports.GET = (path) => {
    return new Promise(resolve => {
        axios.get(`${baseURL}${path}`)
        .then(response => resolve(response))
        .catch(err => resolve(err));
    });
};

exports.POST = (path, data) => {
    return new Promise((resolve) => {
        fetch(`${baseURL}${path}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((response) => response.json())
            .then( res => resolve(res))
            .catch((err) => resolve(err));
    });
};

exports.PUT = (path, data) => {
    return new Promise((resolve) => {
        fetch(`${baseURL}${path}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((response) => response.json())
            .then( res => resolve(res))
            .catch((err) => resolve(err));
    });
};


exports.UPDATE = (path, params) => {

};

exports.DELETE = (path, id) => {

};

// static post = (url, data) => {
//     return new Promise((resolve) => {
//         fetch('https://hasagi-test.herokuapp.com' + url, {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         }).then((response) => response.json())
//             .then((res) => resolve({
//                 success: true,
//                 body: res 
//             })).catch((err) => resolve({
//                 success: false,
//                 body: err
//             }));
//     });
// }