import { createSlice } from "@reduxjs/toolkit";
import cartLocal from "../../utils/localStorage";

const products = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    initProducts: (state, action) => {
      const data = action.payload;
      const carts = cartLocal.getCart() || [];

      return data.map((item) => {
        const idx = carts.findIndex((e) => e?.id === item?.id);

        return { ...item, addedToCart: idx >= 0 };
      });
    },
    updateProduct: (state, action) => {
      const { id, status } = action.payload;

      return state.map((item, index) => {
        if (item.id === id) {
          return { ...item, addedToCart: status };
        }
        return item;
      });
    },
  },
});

const { reducer, actions } = products;
export const { initProducts, updateProduct } = actions;
export default reducer;
