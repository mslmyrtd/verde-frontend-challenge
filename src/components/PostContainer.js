import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPostItems } from '../features/post/postSlice'
import { useEffect } from 'react'
import PostItem from './PostItem'
const CardContent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostItems())
  }, [])
  const { posts, isLoading } = useSelector((state) => state.post)
  if (isLoading) {
    return <p>Loading</p>
  }
  return (
    <>
      {posts.map((post) => {
        return <PostItem key={post.id} {...post} />
      })}
    </>
  )
}

export default CardContent
