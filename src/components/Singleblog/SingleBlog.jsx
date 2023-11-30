import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Singleblog.css'
import Navbar from '../Navbar/Navbar'
import { db } from '../../Firebase'
import { collection, doc, getDoc } from 'firebase/firestore'

const SingleBlog = () => {
   const [data, setdata] = useState({})
  const {id}=useParams()
  const colref=collection(db,'blog')
  const singledata=doc(db,'blog',id)
  useEffect(() => {
    const singlefetch=()=>{
      getDoc(singledata).then((doc)=>
      setdata(doc.data()),
     

      )
    }
    singlefetch()
  }, [id])
  
  return (
    <>
    <Navbar/>
    <div className="single-container">
      <div className="left-s">
        <img src={data.img} alt="" />
      </div>
      <div className="right-s">
        <div className="auth-name">
        <img src={data.authorimage} alt="" />
        <h2>{data.authorname}</h2>
        </div>
        <h2>{data.title}</h2>

        <h3>{data.shortdesc}</h3>
        <h5>{data.fulldesc}</h5>

      </div>
    </div>
 
    </>
  )
}

export default SingleBlog