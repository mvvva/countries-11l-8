import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  loading: false,
  error: null,
  selectedCountries: JSON.parse(localStorage.getItem("selectedCountries")) || [],
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    selectCountry: (state, action) => {
      state.selectedCountries.push(action.payload);
      localStorage.setItem("selectedCountries", JSON.stringify(state.selectedCountries));
    },
    unSelectCountry: (state, action) => {
      state.selectedCountries = state.selectedCountries.filter(
        (country) => country.cca2 !== action.payload
      );
      localStorage.setItem("selectedCountries", JSON.stringify(state.selectedCountries));
    },
  },
});

export const {
  setCountries,
  setLoading,
  setError,
  selectCountry,
  unSelectCountry,
} = countriesSlice.actions;

export default countriesSlice.reducer;