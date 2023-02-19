import *  as ActionType from '../ActionType'

export const addMedicin = () => (dispatch) => {
    try {
        fetch('http://localhost:3000/medicines')
            .then(response => response.json())
            .then((data) => dispatch({ type: ActionType.MEDICINE_GET, payload: data }))
    } catch (error) {

    }
}

export const postMedicine = (data) => (dispatch) => {
  try {
     fetch('http://localhost:3000/medicines', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
         .then(response => response.json())
         .then((data) => dispatch({type:ActionType.MEDICINE_ADD, playload:data}))
  }
  catch(error){

  }
}

export const deleteMedicines = (id) => (dispatch) => {
  try {
      fetch('http://localhost:3000/medicines' + id, {
          method: 'DELETE'
      })
      .then((response) => response.json())
      .then(dispatch({type: ActionType.MEDICINES_DELETE, payload: id}))
  } catch (error) {

  }
}
