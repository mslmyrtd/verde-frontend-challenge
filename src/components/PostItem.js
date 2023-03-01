import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const PostItem = ({ title, body, id }) => {
  return (
    <Link to={`/details/${id}`}>
      <div className='max-w-sm rounded overflow-hidden  hover:shadow-lg cursor-pointer transition duration-700 ease-in-out'>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{title}</div>
          <p className='text-gray-700 text-base'>{body}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostItem
