import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {

  const [photo, setphoto] = useState({
    title:"",
    photo:""
  })

  const handleChange = (e) => {
    setphoto((prev)=>({...prev,[e.target.name]: e.target.value}))
  }
 

  const navigate = useNavigate()
  const location = useLocation()
  const photoID = location.pathname.split("/")[2]

  const handleClick = async (id) => {
    try{
      await axios.put("http://localhost:8800/photos/"+photoID,photo)
      navigate("/")
    }catch(err){
        console.log(err)
    }
  }

  return (
    <>
      <div className="form">
        <h1>Edit</h1>
        <input type="text" placeholder='title' name="title" onChange={handleChange}></input>
        <input type="text" placeholder='photo' name="photo" onChange={handleChange}></input>
        <button className='formButton' onClick={handleClick}>EDIT</button>
      </div>
    </>
  )
}

export default Update 