
import * as ActionType from '../ActionType'
const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}
export const medicinReducer = (state = initialState, action) => {
    // console.log(action.payload);
    switch (action.type) {
        case ActionType.MEDICINE_GET: {
            return {
                ...state,
                medicines: action.payload
            }
        }
        case ActionType.MEDICINE_POST: {
            return {
                ...state,
                medicines: state.medicines.concat(action.payload)
            }
        }
        case ActionType.MEDICINE_UPDATE: {
            let Udata = state.medicines.map((m) => {
                if (m.id === action.payload.id) {
                    return action.payload
                } else {
                    return m;
                }
            })
            return {
                ...state,
                medicines: Udata
            }
        }
        default: {
            return state
        }
    }
}