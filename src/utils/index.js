export * from './api'

export const mergeObjects = objects => Object.assign({}, ...objects);

const augmentSelector = (rootSelector, selector) => {
    return state => selector(rootSelector(state));
}

const augmentSelectorsReducerFactory = (rootSelector, ns, selectorsObj) => (state, item) => {
    const selectorName = item === 'root' ? `${ns}${item}` : item;
    const selector = selectorsObj[selectorName];
    return {
        ...state,
        [selectorName]: augmentSelector(rootSelector, selector)
    }
};

export const augmentSelectors = (rootSelector, ns, selectorsObj) => {
    return Object.keys(selectorsObj).reduce(
        augmentSelectorsReducerFactory(rootSelector, ns, selectorsObj),
        {}
    );
}

// src/utils/index.js
export * from "./api";
export * from "./ducks";