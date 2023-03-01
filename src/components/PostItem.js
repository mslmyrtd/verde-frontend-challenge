import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setCurrentPost } from '../features/post/postSlice'
// import { fetchPostById } from '../features/post/singlePostSlice'

const PostItem = ({ post }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { title, body, id } = post
  const handleClick = () => {
    dispatch(setCurrentPost(post))
    navigate(`/details/${id}`)
  }
  // useEffect(() => {
  //   dispatch(fetchPostById(id))
  // }, [dispatch, id])
  return (
    <div
      className='max-w-sm rounded overflow-hidden  hover:shadow-lg cursor-pointer transition duration-700 ease-in-out'
      onClick={handleClick}
    >
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>{body}</p>
      </div>
    </div>
  )
}

export default PostItem
