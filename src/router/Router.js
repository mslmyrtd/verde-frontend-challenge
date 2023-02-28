import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Details, ErrorPage, NewPost, UpdatePost, Dashboard } from '../pages'

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/new' element={<NewPost />} />
        <Route path='/update/:id' element={<UpdatePost />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
