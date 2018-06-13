export const logger = store => next => action => {
    console.log(action.type);
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}