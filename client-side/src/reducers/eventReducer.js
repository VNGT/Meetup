import  { CREATE_EVENT, UPDATE_EVENT } from '../actions/types';

const initialState = {
    item: {},
};

// action here will include the type
export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};