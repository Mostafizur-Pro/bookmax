// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useState } from "react";

export const fetchBooks = createAsyncThunk("books/fetchAll", async () => {
  try {
    const response = await axios.get(
      "https://bookmax-server.vercel.app/api/v1/books"
    );
    return response.data;
  } catch (error) {
    console.error("Error occurred during GET API request:", error);
    throw error;
  }
});
// const [data, setData] = useState<IBooks[]>([]);
// useEffect(() => {
//   void fetch("http://localhost:5000/api/v1/books")
//     .then((res) => res.json())
//     .then((data) => setData(data));
// }, []);

const booksGetSlice = createSlice({
  name: "books",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default booksGetSlice.reducer;
