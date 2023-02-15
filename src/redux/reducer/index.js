import { combineReducers } from "redux";
import { getMedicine } from "../action/medicins.action";
import { counterReducer } from "./counter.reducer";
import { medicinReducer } from "./medicine.reducer";

export const rootReducer = combineReducers({
    count: counterReducer,
    medicine: medicinReducer
})