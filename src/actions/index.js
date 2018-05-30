
import { api } from '../utils';


// UI
export const updateItemsToShow = value => ({
    type: 'UPDATE_ITEMS_TO_SHOW',
    payload: value,
});

export const toggleTheme = () => ({
    type: 'TOGGLE_THEME',
});


// DATA
// DATA ITEMS IDS
export const requestItemsIdsStart = () => ({
    type: 'REQUEST_ITEMS_IDS_START',
});
export const requestItemsIdsSuccess = itemsIds => ({
    type: 'REQUEST_ITEMS_IDS_SUCCESS',
    payload: itemsIds,
});
export const requestItemsIdsFail = err => ({
    type: 'REQUEST_ITEMS_IDS_FAIL',
    payload: err,
});

// DATA ITEM
export const requestItemStart = id => ({
    type: 'REQUEST_ITEM_START',
    payload: id,
});
export const requestItemSuccess = itemObj => ({
    type: 'REQUEST_ITEM_SUCCESS',
    payload: itemObj,
});
export const requestItemFail = (id, err) => ({
    type: 'REQUEST_ITEM_FAIL',
    payload: { id, err },
});

// FETCHES
export const fetchItemsIds = dispatch => () => {
    dispatch(requestItemsIdsStart());
    api
        .getItemsIds()
        .then(itemsIds => {
            dispatch(requestItemsIdsSuccess(itemsIds));
        })
        .catch(err => {
            dispatch(requestItemsIdsFail(err));
        });
};

export const fetchItem = dispatch => id => {
    dispatch(requestItemStart(id));
    api
        .getItem(id)
        .then(item => {
            dispatch(requestItemSuccess(item));
        })
        .catch(err => {
            dispatch(requestItemFail(id, err));
        });
};