import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='overflow-x-hidden bg-white p-11 m-7 rounded-md'>
      {children}
    </div>
  )
}

export default Layout
