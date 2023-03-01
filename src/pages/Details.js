import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { PlusIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux'

import {
  TrashIcon,
  PencilIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline'
import { deletePost, selectCurrentPost } from '../features/post/postSlice'

const Details = () => {
  const { id } = useParams()
  const post = useSelector(selectCurrentPost)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleDeleteClick = () => {
    dispatch(deletePost(id))
    navigate('/')
  }
  return (
    <>
      <div className='border-b border-gray-600 bg-white px-4 py-5 sm:px-6 w-2/3 ml-auto mr-auto shadow-lg'>
        <Link to='/'>
          <ArrowLeftIcon className='-ml-1 mr-1 h-7 w-10  mb-5  rounded-full  bg-slate-300 ' />
        </Link>
        <div className='-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap'>
          <h3 className='text-base font-semibold leading-6 text-gray-900'>
            Posts
          </h3>
          <div className='ml-4 mt-4 flex-shrink-0'>
            <Link to='/new'>
              <button
                type='button'
                className='relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2  font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  sm:px-1 text-sm'
              >
                <PlusIcon className='-ml-1 mr-1 h-5 w-5' aria-hidden='true' />
                <span>New Post</span>
              </button>
            </Link>
          </div>
        </div>
        <div className='-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap'>
          <div className='ml-4 mt-4'>
            <h3 className='text-base font-semibold leading-6 text-gray-900'>
              {post?.title}
            </h3>
            <p className='mt-1 text-sm text-gray-500'>{post?.body}</p>
          </div>
        </div>
        <div className='-ml-4 mt-5 flex flex-wrap  justify-end sm:flex-nowrap'>
          <button
            type='button'
            className='inline-flex items-center rounded-md border border-transparent bg-red-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2  focus:ring-offset-2'
            onClick={handleDeleteClick}
          >
            <TrashIcon className='-ml-0.5 mr-2 h-4 w-4' aria-hidden='true' />
            Delete
          </button>
          <Link to={`/update/${id}`}>
            <button
              type='button'
              className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-5 focus:ring-offset-2'
            >
              <PencilIcon className='-ml-0.5 mr-2 h-4 w-4' aria-hidden='true' />
              Update
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Details
