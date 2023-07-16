import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/user/userSlice";
import postApiReducer from "./feature/book/bookSlice";
import bookGetSlice from "./feature/book/bookGetSlice";
import { api } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    bookPost: postApiReducer,
    books: bookGetSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
