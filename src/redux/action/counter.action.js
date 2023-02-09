import * as ActionTypes from '../ActionTypes';

export const increment = (data) => (dispatch) => {
    console.log(data);
    dispatch({
        type: ActionTypes.INCREMENT_COUNTER,
        payload: 0
    })
}

export const decrement = () => (dispatch) => {
    dispatch({
        type: ActionTypes.DECREMENT_COUNTER,
        payload: 0
    })
}