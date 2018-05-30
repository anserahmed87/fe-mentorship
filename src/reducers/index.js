import { combineReducers } from 'redux';

// HELPERS
const stringifyErr = err => err.toString();

// UI
const itemsToShowReducer = (state = 10, action) => {
    switch (action.type) {
        case 'UPDATE_ITEMS_TO_SHOW':
            return action.payload;
        default:
            return state;
    }
};

const isDarkThemeReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return !state;
        default:
            return state;
    }
};

const uiReducer = combineReducers({
    itemsToShow: itemsToShowReducer,
    isDarkTheme: isDarkThemeReducer,
});

// DATA

const dataItemsIdsInitialState = { ids: [], isLoading: false, error: null };
const itemIdsReducer = (state = dataItemsIdsInitialState, action) => {
    switch (action.type) {
        case 'REQUEST_ITEMS_IDS_START':
            return { ...state, isLoading: true };
        case 'REQUEST_ITEMS_IDS_SUCCESS':
            return { ids: action.payload, isLoading: false, error: null };
        case 'REQUEST_ITEMS_IDS_FAIL':
            return {
                ids: {},
                isLoading: false,
                error: stringifyErr(action.payload),
            };
        default:
            return state;
    }
};

const itemsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'REQUEST_ITEM_START':
            return {
                ...state,
                [action.payload]: { item: {}, isLoading: true, error: null },
            };
        case 'REQUEST_ITEM_SUCCESS':
            return {
                ...state,
                [action.payload.id]: {
                    item: action.payload,
                    isLoading: false,
                    error: null,
                },
            };
        case 'REQUEST_ITEM_FAIL':
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

const dataReducer = combineReducers({
    itemsIds: itemsIdsReducer,
    items: itemsReducer,
});


// ROOT
export const rootReducer = combineReducers({
    ui: uiReducer,
    data: dataReducer,
});