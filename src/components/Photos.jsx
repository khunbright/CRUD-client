import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "../style.css"

const Photos = () => {
  const [photos,setPhotos] = useState([])

  useEffect(() => {
    const fecthAllPhotos = async()=>{
      try{
        const res = await axios.get("http://localhost:8800/photos")
        setPhotos(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fecthAllPhotos()
  }, [])

  const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:8800/photos/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <>
    <div>
      <h1>PHOTO BLACKPINK</h1>
      <div className="photos">
        {photos.map((item) => (
          <div className="photo" key={item.id}>
            <h3>{item.title}</h3>
            {item.photo && <img src={item.photo} alt="" />}
            <button className="delete" onClick={()=>handleDelete(item.id)}>Delete</button>
            <button className="edit"><Link to={`/update/${item.id}`}>Edit</Link></button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">ADD</Link>
      </button>
    </div>
    </>
  )
}

export default Photos