import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPostById = createAsyncThunk(
  'post/fetchPostById',
  async (postId) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
    return response.data
  }
)

const postSlice = createSlice({
  name: 'post',
  initialState: {
    post: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPostById.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchPostById.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.post = action.payload
    },
    [fetchPostById.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})

export default postSlice.reducer
