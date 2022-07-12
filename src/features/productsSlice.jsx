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
      const currencyChange = action.payload;
      if (currencyChange === "€") {
        const tempList = [...state.productLists];
        tempList.forEach(function (item, index) {
          tempList[index].price = Number.parseFloat(
            tempList[index].price / 0.99
          ).toFixed(1);
          tempList[index].currency = currencyChange;
        });
      } else if (currencyChange === "ALL") {
        const tempList = [...state.productLists];
        tempList.forEach(function (item, index) {
          tempList[index].price = Number.parseFloat(
            tempList[index].price * 117.33
          ).toFixed(0);
          tempList[index].currency = currencyChange;
        });
      } else {
        state.productLists = ProductStore;
      }
    },
  },
});

export const { addProduct, sortProducts, updateCurrency } =
  productSlice.actions;

export default productSlice.reducer;

export const selectProduct = (state) => state.productList.productLists;
