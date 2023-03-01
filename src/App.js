import './App.css'
import AppRouter from './router/Router'
import { fetchPosts } from './features/post/postSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts())
  })
  return <AppRouter />
}

export default App
