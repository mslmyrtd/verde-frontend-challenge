import React from 'react'
import { useSelector } from 'react-redux'

import PostItem from './PostItem'

const CardContent = () => {
  const { posts, isLoading } = useSelector((state) => state.post)
  if (isLoading) {
    return <p>Loading</p>
  }
  return (
    <>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />
      })}
    </>
  )
}

export default CardContent
