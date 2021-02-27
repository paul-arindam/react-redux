import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducers/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducer";
import { orderReducer } from "./reducers/orderReducer";

const initialState = {};

const store = createStore(
  combineReducers({
    products: productReducer,
    cart: cartReducer,
    order: orderReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
