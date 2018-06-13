import { combineReducers } from 'redux';
import * as item from './item';
import * as itemsIds from './itemsIds';
import { mergeObjects, augmentSelectors } from '../utils';

export const ns = 'nested';

export const shape = mergeObjects([ item.shape, itemsIds.shape ]);
export const defaultState = mergeObjects([ subduck1.defaultState, subduck2.defaultState ]);

const root = state => state[ns];
export const selectors = {
    root,
    ...augmentSelectors(root, subduck1.ns, subduck1.actions),
    ...augmentSelectors(root, subduck1.ns, subduck2.actions),
}

export const actions = mergeObjects([subduck1.actions, subduck2.actions]);

export const reducer = combineReducers({
    ...subduck1.reducer,
    ...subduck2.reducer,
});