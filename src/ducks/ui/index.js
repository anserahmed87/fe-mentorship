import PropTypes from 'prop-types';

export const ns = 'ui-duck';

export const shape = {
    itemsToShow: PropTypes.number.isRequired,
    isDarkTheme: PropTypes.bool.isDarkTheme,
};

export const defaultState = {
    itemsToShow: 10,
    isDarkTheme: false,
};

const root = state => state[ns];

export const selectors = {
    root,
    itemsToShow: state => root(state).itemsToShow,
    isDarkTheme: state => root(state).isDarkTheme,
}

// example duck's types
export const types = {
    updateItemsToShow: `${ns} / UPDATE_ITEMS_TO_SHOW`,
    toggleTheme: `${ns} / TOGGLE_THEME`,
};
// UI


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

const rawReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.updateItemsToShow:
            return {
                ...state,
                itemsToShow: action.payload
            }
        case types.toggleTheme:
            return{
                ...state,
                isDarkTheme: !state.isDarkTheme
            }
        default:
            return state;
    }
};

export  const reducer= {
    [ns]:rawReducer
}



