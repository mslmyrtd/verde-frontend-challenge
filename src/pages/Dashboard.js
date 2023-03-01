import React from 'react'
import PostContainer from '../components/PostContainer'

const Dashboard = () => {
  return (
    <div>
      <div class='grid lg:grid-cols-3 gap-2 m-2 md:grid-cols-2 sm:grid-cols-1'>
        <PostContainer />
      </div>
    </div>
  )
}

export default Dashboard
