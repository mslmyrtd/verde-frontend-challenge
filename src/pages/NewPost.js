import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addPost } from '../features/post/postSlice'

const NewPost = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addPost({ title, body }))
    setTimeout(() => {
      navigate('/')
    }, 1500)
    setTitle('')
    setBody('')
  }
  return (
    <div className='flex justify-center items-center mt-12 '>
      <div className='w-full max-w-xs'>
        <p className='flex justify-center items-center font-semibold mb-5'>
          New Post
        </p>
        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 dark:bg-slate-200'
        >
          <div>
            <label
              htmlFor='title'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Title:
            </label>
            <input
              type='text'
              id='title'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-15 mb-5'
            />
          </div>
          <div className='mb-8'>
            <label
              htmlFor='body'
              className='block text-gray-700 text-sm font-bold '
            >
              Message:
            </label>
            <textarea
              id='body'
              name='body'
              rows='10'
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className='"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
            />
          </div>

          <div className='flex items-center justify-end'>
            <Link to='/'>
              <button className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none'>
                Cancel
              </button>
            </Link>
            <button
              type='submit'
              className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ml-5'
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewPost
