import { combineReducers } from "redux";
import itemsIds from "./itemsIds";
import item from "./item";
import { mapObj, augmentSelectorWith } from "../../utils";

export const ns = "data-duck";

const root = state => state[ns];
export const selectors = {
    root,
};

export const rawReducer = combineReducers({
    ...itemsIds.reducer,
    ...item.reducer
});

const reducer = {
    [ns]: rawReducer
}

export default {
    ns,
    selectors,
    rawReducer,
    reducer,
    itemsIds: {
        ...itemsIds,
        selectors: mapObj(itemsIds.selectors, augmentSelectorWith(root)),
    },
    item: {
        ...item,
        selectors: mapObj(item.selectors, augmentSelectorWith(root)),
    },
};