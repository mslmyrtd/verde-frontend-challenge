import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updatePost } from '../features/post/postSlice'

const UpdatePost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const post = useSelector((state) =>
  //   state.post.post?.find((post) => post.id === Number(id))
  // )
  const post = useSelector((state) => state.singlePost.post)

  const [title, setTitle] = useState(post?.title)
  const [body, setBody] = useState(post?.body)
  const handleTitleChange = (event) => setTitle(event.target.value)
  const handleBodyChange = (event) => setBody(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    const updatedPost = {
      id,
      title,
      body,
    }
    dispatch(updatePost(updatedPost))
    navigate('/')
  }

  return (
    <div className='flex justify-center items-center mt-12 '>
      <div className='w-full max-w-xs'>
        <p className='flex justify-center items-center font-semibold mb-5'>
          Update
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
              onChange={handleTitleChange}
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
            <input
              id='body'
              name='body'
              value={body}
              onChange={handleBodyChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-56 block mr-auto mr-auto'
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdatePost
