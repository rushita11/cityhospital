import *  as ActionType from '../ActionType'

export const addMedicin = () => (dispatch) => {
  try {
    fetch('http://localhost:3006/medicines')
      .then(response => response.json())
      .then((data) => dispatch({ type: ActionType.MEDICINE_GET, payload: data }))
  } catch (error) {

  }
}

export const postMedicine = (data) => (dispatch) => {
  console.log(data);
  try {
    fetch('http://localhost:3006/medicines', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      //  .then((data1) => console.log(data1))
      .then((data1) => dispatch({ type: ActionType.MEDICINE_ADD, payload: data1 }))
  }
  catch (error) {

  }
}

export const putMedicine = (data) => (dispatch) => {
  console.log(data);
  try {
    fetch('http://localhost:3006/medicines/' + data.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ActionType.MEDICINES_UPDATE, payload: data });
      })

  }
  catch (error) {

  };
}
export const deleteMedicines = (id) => (dispatch) => {
  try {
    fetch('http://localhost:3006/medicines/' + id, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then(dispatch({ type: ActionType.MEDICINES_DELETE, payload: id }))
  } catch (error) {

  }
}
