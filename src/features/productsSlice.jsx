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
    sortProducts: (state, action) => {
      const direction = action.payload;

      if (direction === "ASC") {
        state.productLists = [...state.productLists].sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      } else if (direction === "DESC") {
        state.productLists = [...state.productLists].sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      } else {
        state.productLists = ProductStore;
      }
    },
    updateCurrency: (state, action) => {
      const index = state.productLists.findIndex((prd) => {
        if (prd.id === action.payload) {
          return { ...prd, currency: prd.currency, price: prd.price * 10 };
        }
        return prd;
      });
      state.productLists[index].currency = action.payload.currency;
    },
  },
});

export const { addProduct, sortProducts, updateCurrency } =
  productSlice.actions;

export default productSlice.reducer;

export const selectProduct = (state) => state.productList.productLists;
