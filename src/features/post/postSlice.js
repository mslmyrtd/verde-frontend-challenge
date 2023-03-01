import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  )
  return response.data
})

export const addPost = createAsyncThunk('posts/addPost', async (post) => {
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    post
  )
  return response.data
})

export const updatePost = createAsyncThunk('posts/updatePost', async (post) => {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    post
  )
  return response.data
})

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return id
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
    currentPost: null,
  },
  reducers: {
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        if (state.posts.length === 0) state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload)
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const postIndex = state.posts.findIndex(
          (post) => Number(post.id) === Number(action.payload.id)
        )
        if (postIndex !== -1) {
          state.posts[postIndex] = action.payload
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(
          (post) => Number(post.id) !== Number(action.payload)
        )
      })
  },
})
export const { setCurrentPost } = postsSlice.actions
export const selectCurrentPost = (state) => state.post.currentPost
export const selectTotalAmount = (state) => state.post.posts.length
export default postsSlice.reducer
