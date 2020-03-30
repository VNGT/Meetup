import axios from 'react-native-axios';
// const baseURL = 'https://u1j72jxymf.execute-api.us-east-1.amazonaws.com/dev/v1/';
const baseURL = 'http://localhost:3000/v1/';

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

exports.GETAVATAR = (fullName) => {
    return new Promise(resolve => {
        axios.get(`https://ui-avatars.com/api/name=${fullName}?background=0D8ABC&color=fff`)
        .then(response => resolve(response))
        .catch(err => resolve(err));
    });
};