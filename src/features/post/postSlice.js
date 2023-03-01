import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: 0,
}

const postSlice = createSlice({
  name: 'cart',
  initialState,
})

export default postSlice.reducer
