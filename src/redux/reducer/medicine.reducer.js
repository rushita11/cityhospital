import * as ActionType from '../ActionType'

const initialState = {
    isLoading: false,
    medicine: [],
    error: null
}
export const medicineReducer = (state = initialState, action) => {
    console.log(state, action)
    switch (action.type) {
        case ActionType.MEDICINE_GET: 
            return {
                ...state,
                medicine: action.payload
            }
        
      
        case ActionType.MEDICINE_ADD:
           return{
            ...state,
            medicine: state.medicine.concat(action.payload)
           }
        

        case ActionType.MEDICINES_DELETE:
            let dData = state.medicine.filter((m) => m.id !== action.payload);
            return {
                ...state,
                medicine: dData
            }
        default:
            return state
    }
}