import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postApiSlice = createSlice({
  name: "books",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postApi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(postApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const postApi = createAsyncThunk(
  "books/postApi",
  async (bookData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/books/create-book",
        bookData
      );
      return response.data;
    } catch (error) {
      console.error("Error occurred during POST API request:", error);
      return rejectWithValue("Failed to create book");
    }
  }
);

export default postApiSlice.reducer;
