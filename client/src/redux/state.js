import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  listings: [],
  reservations: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setListings: (state, action) => {
      state.listings = action.payload.listings;
    },
    setReservations: (state, action) => {
      state.reservations = action.payload.reservations;
    },
    
  },
});

export const { setLogin, setLogout, setListings, setReservations } = userSlice.actions;
export default userSlice.reducer;


