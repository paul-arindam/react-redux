import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducers/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const store = createStore(
  combineReducers({
    products: productReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
