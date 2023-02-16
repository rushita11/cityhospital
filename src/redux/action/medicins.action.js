import * as ActionType from '../ActionType'


export const getMedicine = () => (dispatch) => {
    // console.log("action")
    fetch('http://localhost:3007/medicin')
        .then((response) => response.json())
        .then((data) => dispatch({ type: ActionType.MEDICINE_GET, payload: data }));
}

export const postMedicine = (data1) => (dispatch) => {
    console.log(data1)
    try {
        fetch('http://localhost:3007/medicin', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.MEDICINE_POST, payload: data }));

    } catch (error) {

    }
}
export const putMedicine = (data1) => (dispatch) => {
    console.log(data1)
 try {
    fetch('http://localhost:3007/medicin',{
        method: 'PUT',
        header: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify(data1),
    })
    .then((response) => response.json())
    .then((data) => dispatch({type:ActionType.MEDICINE_POST}));
 }catch(error){
}
}