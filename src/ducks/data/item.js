import PropTypes from 'prop-types';
import {api} from "../../utils/api";

export const ns = 'items';
const stringifyErr = err => err.toString();

const shape = {
   // item: PropTypes.object,
    //isLoading: PropTypes.bool.isRequired,
    //error: PropTypes.object,
};

export const defaultState = {
    item: {},
    isLoading: false,
    error: null
};

const root = state => state ? state[ns] : defaultState;


export const selectors = {
    root,
    item: (state,id) => (root(state)[id] || {}).item,
    isLoading: (state,id) => (root(state)[id] || {}).isLoading,
    error: (state,id) => (root(state)[id] || {}).error,
};

export const types = {
    requestItemStart: 'REQUEST_ITEM_START',
    requestItemSuccess: 'REQUEST_ITEM_SUCCESS',
    requestItemFail: 'REQUEST_ITEM_FAIL',
};


export const requestItemStart = id => ({
    type: types.requestItemStart,
    payload: id,
});

export const requestItemSuccess = item => ({
    type: types.requestItemSuccess,
    payload: item,
});

export const requestItemFail = (id, err) => ({
    type: types.requestItemFail,
    payload: {id, err},
});

const fetchItem = id => {
    return (dispatch) => {
        dispatch(requestItemStart(id));
        return api
            .getItem(id)
            .then(item => {
                dispatch(requestItemSuccess(item));
            })
            .catch(err => {
                dispatch(requestItemFail(id, err));
            });
    }
};

const actions = {
    requestItemStart,
    requestItemSuccess,
    requestItemFail,
    fetchItem,
};

const rawReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.requestItemStart:
            return {
                ...state,
                [action.payload]: {item: {}, isLoading: true, error: null},
            };
        case types.requestItemSuccess:
            return {
                ...state,
                [action.payload.id]: {
                    item: action.payload,
                    isLoading: false,
                    error: null,
                },
            };
        case types.requestItemFail:
            return {
                ...state,
                [action.payload.id]: {
                    item: {},
                    isLoading: false,
                    error: stringifyErr(action.payload.err),
                }
            };
        default:
            return state;
    }
};

const reducer = {
    [ns]: rawReducer
}
export default {
    ns,
    shape,
    defaultState,
    selectors,
    types,
    actions,
    rawReducer,
    reducer,
}