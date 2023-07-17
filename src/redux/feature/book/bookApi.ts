import { api } from "../../api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // addBook: builder.mutation({
    //   query: (data) => ({
    //     url: `/books/add-book`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["addNewBook"],
    // }),
    // bookReview: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/books/${id}`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["bookReview"],
    // }),
    // updateBook: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/books/update-book/${id}`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["bookDetails"],
    // }),
    // deleteBook: builder.mutation({
    //   query: (id: string) => ({
    //     url: `/books/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["deleteBook"],
    // }),
    // ---------------------------------------------
    createBook: builder.mutation({
      query: (data) => ({
        url: `/books/create-book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["createBook"],
    }),
    getAllBooks: builder.query({
      query: (data) => ({
        url: "/books/get-book",
        method: "GET",
        providesTags: ["addNewBook"],
        body: data,
      }),
    }),
    getSingleBooks: builder.query({
      query: ({ id, data }) => ({
        url: `/books/getSingle-books/${id}`,
        method: "GET",
        providesTags: ["addSingleBook"],
        body: data,
      }),
    }),
    getFilterBooks: builder.query({
      query: ({ search, genre, publication }) => ({
        url: `/books/get-book?genre=${genre}`,
        params: { search, genre, publication },
        providesTags: ["filterBook"],
      }),
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/deleteBook?${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteBook"],
    }),
    // ---------------------------------------------
    // getAllBooks: builder.query({
    //   query: ({ search, genre, publication }) => ({
    //     url: "/books/get-book",
    //     params: { search, genre, publication },
    //     providesTags: ["addNewBook", "deleteBook"],
    //   }),
    // }),
    // getRecentBooks: builder.query({
    //   query: () => ({
    //     url: "/books/recent-published",
    //     providesTags: ["addNewBook"],
    //   }),
    // }),
    // bookDetails: builder.query({
    //   query: (id: string) => `/books/${id}`,
    //   providesTags: ["bookDetails", "bookReview"],
    // }),
  }),
});

export const {
  useGetFilterBooksQuery,
  useCreateBookMutation,
  useDeleteBookMutation,

  useGetAllBooksQuery,
  useGetSingleBooksQuery,
} = booksApi;
