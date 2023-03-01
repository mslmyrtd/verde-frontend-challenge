import { configureStore } from '@reduxjs/toolkit'
import postReducer from './features/post/postSlice'
import singlePostSlice from './features/post/singlePostSlice'
export const store = configureStore({
  reducer: {
    post: postReducer,
    singlePost: singlePostSlice,
  },
})
