import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './Blogs.css'
import { getAuth } from 'firebase/auth'
import { db } from '../../Firebase'
import { onSnapshot,collection ,doc,deleteDoc} from 'firebase/firestore'
 import { useState } from 'react'
import { Link } from 'react-router-dom'
const Blogs = () => {
  const auth=getAuth()
  const colref=collection(db,'blog')
  const [data, setdata] = useState([])
  useEffect(() => {
    const getdata=()=>{
        onSnapshot(colref,(Snapshot)=>{
              setdata(Snapshot.docs.map((doc)=>({
                ...doc.data(),id:doc.id
              })))
        

    })
  }
  getdata()
  
}, [])
const deletedata=async(id)=>{
  const data=doc(db,'blog',id)
  alert("your document will be deleted forever")
  await deleteDoc(data)

}
  
  return (
    <>
    <Navbar/>
    {data.map((data)=>{
      return (
        <>
        <div className="b-container">
      <div className="blog-content">

    
    <div className="b-img">
        <img src={data.authorimage} alt="" />
        <h1 style={{color:'white'}}>{data.authorname}</h1>
       
      </div>
    <div className="card mb-3 bg-secondary" style={{maxWidth: '700px'}}>
  <div className="row no-gutters">
    <div className="col-md-4" style={{display:"flex",alignItems:'center',justifyContent:'center'}}>
      <img style={{width:'80%',height:'80%'}} src={data.img} className="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div className="card-body text-center text-white">
        <h5 className="card-title">{data.title}</h5>
        <h2 className="card-text" style={{fontSize:'1rem'}}>{data.shortdesc}</h2>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      <Link to={`./${data.id}`} className='btn btn-primary mx-3'>View More</Link>
      <button onClick={()=>deletedata(data.id)} className='btn btn-danger'>delete</button>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
        
        </>
      )
        
      


    })}
   
    </>
  )
}

export default Blogs