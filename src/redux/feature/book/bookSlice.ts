import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IBooks } from "../../../types/globalTypes";

export const postApi = createAsyncThunk(
  "books/postApi",
  async (bookInfo: IBooks, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://bookmax-server.vercel.app/api/v1/books/create-book",
        bookInfo
      );
      return response.data;
    } catch (error) {
      console.error("Error occurred during POST API request:", error);
      return rejectWithValue("Failed to create book");
    }
  }
);

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
      .addCase(postApi.rejected, (state) => {
        state.loading = false;
        state.error = null;
      });
  },
});

export default postApiSlice.reducer;
