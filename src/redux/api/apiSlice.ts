import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bookmax-server.vercel.app/api/v1",
  }),
  tagTypes: [
    "createBook",
    "bookDetails",
    "deleteBook",
    "bookReview",
    "addSingleBook",
    "filterBook",
  ],
  endpoints: () => ({}),
});
