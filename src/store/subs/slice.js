import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

const fetchSubs = createAsyncThunk("subs/fetchSubs", async () => {
  try {
    const response = await fetch(`${API_URL}/api/suscription/payment/12853`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data) {
        return data?.objModel?.suscriptions;
      }
    } else {
      return {};
    }
  } catch (error) {
    console.error(error);
  }
});

const initialState = {
  data: {},
  isLoading: false,
  hasError: false,
};

const subsSlice = createSlice({
  name: "subs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSubs.fulfilled, (state, action) => {
        state.hasError = false;
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchSubs.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const SubsActions = { fetchSubs };

export default subsSlice.reducer;
