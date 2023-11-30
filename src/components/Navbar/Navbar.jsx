import { getAuth } from 'firebase/auth'
import React from 'react'
import './Navbar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Addblog from '../Addblog/Addblog'
useLocation
const Navbar = () => {
  const pathname=useLocation()
  const auth=getAuth()
  const navigate=useNavigate()
  // console.log(useLocation())
  // console.log(auth)
  const logout=()=>{
    auth.signOut()
    navigate('/')

  }
  return (
    <>
    <div className='navbar-h'>
      <div className="user-content">
        <img src={auth?.currentUser?.photoURL} alt="" />
        <h1>{auth?.currentUser?.displayName}</h1>
       
      </div>
    <div className="email">
      {/* {(pathname==='/blogs')? (<Link to={'/addblog'} className='btn btn-warning'>Add Blog</Link>):''} */}
      {(pathname.pathname==='/blogs')&&(<Link to={'/addblog'} className='btn btn-warning'>Add Blog</Link>)}
      {(pathname.pathname!=='/blogs')&&(<Link to={'/blogs'} className='btn btn-warning'>Back To Blog</Link>)}
      <h3>{auth?.currentUser?.email}</h3>
      <button onClick={logout} className='btn btn-danger'>Log Out</button>
    </div>
    </div>
    </>
  )
}

export default Navbar