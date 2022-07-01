import { createSlice } from "@reduxjs/toolkit";
import ProductStore from "../components/DataStore/ProductStore";

const productSlice = createSlice({
  name: "productList",
  initialState: {
    productLists: ProductStore,
  },
  reducers: {
    addProduct: (state, action) => {
      const payload = action.payload;
      state.productLists = [
        ...state.productLists,
        {
          img: payload.img,
          title: payload.title,
          desc: payload.desc,
          price: payload.price,
          currency: payload.currency,
          id: Math.floor(Math.random() * 100),
        },
      ];
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;

export const selectProduct = (state) => state.productList.productLists;
