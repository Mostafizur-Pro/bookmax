import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postBook: builder.mutation({
      query: ({ book }) => ({
        url: "/books/create-book",
        method: "POST",
        body: book,
      }),
    }),
  }),
});

export const { usePostBookMutation } = bookApi;
