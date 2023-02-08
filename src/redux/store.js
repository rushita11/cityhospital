import { createStore } from "redux";
import { counterReducer } from "./reducer/counter.reducer";

export const configureStore = () => {
    const store = createStore(counterReducer);

    return store;
}
