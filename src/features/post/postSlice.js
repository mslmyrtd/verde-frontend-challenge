import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const postUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
const postComment = 'https://jsonplaceholder.typicode.com/comments'

const initialState = {
  posts: [],
  isLoading: false,
  error: '',
  amount: 0,
}

const getPostItems = createAsyncThunk('post/getPostItems', async () => {
  try {
    const resp = await axios(postUrl)
    return resp.data
  } catch (error) {
    console.log(error)
  }
})
const getComments = createAsyncThunk('post/getComments', async () => {
  try {
    const resp = await axios(postComment)
    return resp.data
  } catch (error) {
    console.log(error)
  }
})

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPostItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.posts = action.payload
      })
      .addCase(getPostItems.rejected, (state, action) => {
        state.isLoading = false
        state.error = 'unknown error occured'
      })
  },
})

//const getIntitialData = createAction(`${post}/getInitialData`)
export default postSlice.reducer

export { getPostItems, getComments }
