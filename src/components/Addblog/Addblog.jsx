import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Addblog.css'
import {db} from '../../Firebase'
import { addDoc, collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Addblog = () => {
  const auth=getAuth()
  const navigate=useNavigate()
  const [formdata, setformdata] = useState({
    title:'',
    shortdesc:"",
    fulldesc:"",
    img:'',
    authorname:auth.currentUser.displayName,
    authorimage:auth.currentUser.photoURL

  })
  const handlechange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
     
  }
  const formref=collection(db,'blog')
  const submithandler= async(e)=>{
          e.preventDefault();
          await addDoc(formref,formdata)
          console.log("submit")
          setformdata({
            title:'',
            shortdesc:"",
            fulldesc:"",
            img:'',
            
        
          })
          console.log('added')
          toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            console.log('done')
            // setTimeout(() => {
              navigate('/blogs')
              
            // }, 2500);

  }
  <ToastContainer
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  />

  return (
    <>
    <Navbar/>
    <div className="addblog-container">
    <form onSubmit={submithandler}>
  <div className="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input onChange={handlechange} name='title' value={formdata.title} type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title"/>
   
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Short Description</label>
    <input onChange={handlechange} name='shortdesc' value={formdata.shortdesc} type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter description"/>
   
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Full Description</label>
    <textarea onChange={handlechange} name='fulldesc' value={formdata.fulldesc} class="form-control " id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Image url</label>
    <input onChange={handlechange} name='img' value={formdata.img} type="text" className="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter image link"/>
    
  </div>
 
  
  <button type="submit" className="btn btn-primary ">Add Blog</button>
</form>
    </div>
    </>
  )
}

export default Addblog