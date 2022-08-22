import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    total: 0,
  },
  reducers: {
    addBasket: (state, action) => {
      state = state.push(action.payload);
    },
    removeBasket: (state, action) => {
      state = state.filter((p) => p.id !== action.payload);
    },
    setBasket: (state, action) => {
      state = action.payload;
    },
    resetBasket: (state) => {
      state = [];
    },
    addBasket: (state, action) => {
      if (state.basket.find((p) => p.id === action.payload.id)) {
        const index = state.basket.findIndex((p) => p.id === action.payload.id);
        state.basket[index].amount = state.basket[index].amount + 1;
        return state;
      } else {
        let cart = {
          id: action.payload.id,
          amount: 1,
          title: action.payload.title,
          image: action.payload.image,
          price: action.payload.price,
          description: action.payload.description,
          tags: action.payload.tags,
        };
        state.basket.push(cart);
        return state;
      }
    },
    decrementBasket: (state, action) => {
      if (state.basket.find((p) => p.id === action.payload.id)) {
        const index = state.basket.findIndex((p) => p.id === action.payload.id);
        if (state.basket[index].amount === 0)
          state.basket = state.basket.filter((p) => p.id !== action.payload.id);
        else state.basket[index].amount = state.basket[index].amount - 1;
        return state;
      }
    },

    removeProduct: (state, action) => {
      state.basket = state.basket.filter((p) => p.id !== action.payload.id);
      return state;
    }

  },
});

export const {
  addBasket,
  removeBasket,
  setBasket,
  resetBasket,
  decrementBasket,
  removeProduct,
} = basketSlice.actions;

export default basketSlice.reducer;
