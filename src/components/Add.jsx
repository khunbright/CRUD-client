import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Add = () => {

  const [photo, setphoto] = useState({
    title:"",
    photo:""
  })

  const handleChange = (e) => {
    setphoto((prev)=>({...prev,[e.target.name]: e.target.value}))
  }
 

  const navigate = useNavigate()

  const handleClick = async (e) => {
    try{
      await axios.post("http://localhost:8800/photos",photo)
      navigate("/")
    }catch(err){
        console.log(err)
    }
  }

  return (
    <>
      <div className="form">
        <h1>Add Photo</h1>
        <input type="text" placeholder='title' name="title" onChange={handleChange}></input>
        <input type="text" placeholder='photo' name="photo" onChange={handleChange}></input>
        <button className='formButton' onClick={handleClick}>ADD</button>
      </div>
    </>
  )
}

export default Add