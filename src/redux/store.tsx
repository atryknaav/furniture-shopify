import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./slices/cartSlice";
import cartOnReducer from "./slices/showCartSlice";
import menuOnReducer from './slices/menuShowSlice';
import sortByReducer from './slices/sortBySlice';

export const store = configureStore({
  reducer: {shoppingCart: cartReducer, cartOn: cartOnReducer, menuOn: menuOnReducer, sortBy: sortByReducer},
          
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch