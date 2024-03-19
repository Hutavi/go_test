// stores/index.js

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = {
  products: productReducer,
  carts: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
