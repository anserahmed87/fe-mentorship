import PropTypes from 'prop-types';

export const ns = 'ui';

export const shape = {
    itemsToShow: PropTypes.number.isRequired,
    isDarkTheme: PropTypes.bool.isDarkTheme,
};

export const defaultState = {
    itemsToShow: 10,
    isDarkTheme: false,
};

const root = state => state?state[ns]:defaultState;

export const selectors = {
    root,
    itemsToShow: state => root(state).itemsToShow,
    isDarkTheme: state => root(state).isDarkTheme,
}

// example duck's types
export const types = {
    updateItemsToShow: 'UPDATE_ITEMS_TO_SHOW',
    toggleTheme: 'TOGGLE_THEME',
};


const rawReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.updateItemsToShow:
            return {
                ...state,
                itemsToShow: action.payload
            }
        case types.toggleTheme:
            return {
                ...state,
                isDarkTheme: !state.isDarkTheme
            }
        default:
            return state;
    }}
    ;

    export const updateItemsToShow = value => ({
        type: types.updateItemsToShow,
        payload: value,
    });

    const toggleTheme = () => ({
        type: types.toggleTheme,
    });

    export const actions = {
        updateItemsToShow,
        toggleTheme,
    };



export const reducer = {
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

