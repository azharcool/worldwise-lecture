import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCities = createAsyncThunk("fetchCities", async (arg) => {
  console.log(arg);
  const res = await fetch("http://localhost:8000/cities");
  const data = await res.json();
  return data;
});

const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCities.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.cities = action.payload;
    });
    // builder.addCase(fetchCities.rejected, (state, action) => {
    //   state.error = action.payload;
    // });
  },
});

export default citiesSlice.reducer;
