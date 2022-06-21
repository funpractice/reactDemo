import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  rootReducer,
});

const store = createStore(rootReducers);

export default store;
