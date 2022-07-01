import { createSlice } from "@reduxjs/toolkit";
import ReviewsStore from "../components/DataStore/ReviewsStore";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviewList: ReviewsStore,
  },
  reducers: {
    addReviews: (state, action) => {
      const payload = action.payload;
      state.reviewList = [
        ...state.reviewList,
        {
          name: payload.name,
          date: payload.date,
          country: payload.country,
          descrip: payload.descrip,
        },
      ];
    },
  },
});

export const { addReviews } = reviewSlice.actions;

export default reviewSlice.reducer;

export const selectReview = (state) => state.review.reviewList;
