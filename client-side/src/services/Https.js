import axios from 'axios';

const GET = (path) => {
    axios.get(path).then(repsonse => {
        return repsonse;
    });
};

const POST = (path, params) => {

};

const UPDATE = (path, params) => {

};

const DELETE = (path, id) => {

};

export default { GET, POST, UPDATE, DELETE };