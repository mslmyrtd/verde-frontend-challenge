import React from 'react'
import CardContent from '../components/CardContent'

const Dashboard = () => {
  return (
    <div class='overflow-x-hidden bg-white p-11 m-7 rounded-md'>
      <div class='grid lg:grid-cols-3 gap-2 m-2 md:grid-cols-2 sm:grid-cols-1'>
        <CardContent />
      </div>
    </div>
  )
}

export default Dashboard
