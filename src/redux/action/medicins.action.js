import * as ActionType from '../ActionType'


export const getMedicine = () => (dispatch) => {
    // console.log("action")
    fetch('http://localhost:3007/medicin')
    .then((response) => response.json())
    .then((data) => dispatch({ type: ActionType.MEDICINE_GET, payload: data }));
}