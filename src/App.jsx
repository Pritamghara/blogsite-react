import { useState } from 'react'
import Login from './components/Login/Login'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Addblog from './components/Addblog/Addblog'

import SingleBlog from './components/Singleblog/SingleBlog'

import { Route, BrowserRouter as Router, Routes,} from 'react-router-dom'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
       < Route path='/' element={<Login/>} />
       < Route path='/blogs' element={<Blogs/>} />
       < Route path='/blogs/:id' element={<SingleBlog/>} />
       < Route path='/addblog' element={<Addblog/>} />
      </Routes>
    </Router>
   
    </>
    
    
  )
}

export default App
