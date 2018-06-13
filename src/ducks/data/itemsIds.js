import PropTypes from 'prop-types';
import {api} from "../../utils/api";


const stringifyErr = err => err.toString();
const ns = 'itemsIds';

const shape = {
    ids: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};


const defaultState = {ids: [], isLoading: false, error: null};


const root = state => state ? state[ns] : defaultState;

const selectors = {
    root,
    ids: state => root(state).ids,
    isLoading: state => root(state).isLoading,
    error: state => root(state).error,
}


const types = {
    start: 'REQUEST_ITEMS_IDS_START',
    success: 'REQUEST_ITEMS_IDS_SUCCESS',
    fail: 'REQUEST_ITEMS_IDS_FAIL',
};


 const requestItemsIdsStart = value => ({
    type: types.start,
    payload: value,
});

 const requestItemsIdsSuccess = itemsIds => ({
    type: types.success,
    payload: itemsIds,
});

 const requestItemsIdsFail = err => ({
    type: types.fail,
    payload: err,
});
const fetchItemsIds = () => {
    return (dispatch) => {
        dispatch(requestItemsIdsStart());
        return api
            .getItemsIds()
            .then(itemsIds => {
                dispatch(requestItemsIdsSuccess(itemsIds));
            })
            .catch(err => {
                dispatch(requestItemsIdsFail(err));
            });
    }
};


const actions = {
    requestItemsIdsStart,
    requestItemsIdsSuccess,
    requestItemsIdsFail,
    fetchItemsIds,
};

const rawReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.start:
            return {...state, isLoading: true};
        case types.success:
            return {ids: action.payload, isLoading: false, error: null};
        case types.fail:
            return {
                ids: {},
                isLoading: false,
                error: stringifyErr(action.payload),
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
