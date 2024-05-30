import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

const fetchLogin = createAsyncThunk("auth/fetchLogin", async (loginData) => {
  try {
    const response = await fetch(`${API_URL}/api/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      return await response.json();
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.hasError = false;
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const AuthActions = { fetchLogin };

export default authSlice.reducer;
