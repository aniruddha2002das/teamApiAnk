import React from 'react'
import Post from './Post';
import { useState, useEffect } from 'react'

function Postlist() {

    const [dataArray, setDataArray] = useState([]);

    useEffect(()=>{
        fetch("https://localhost:8050/posts")
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setDataArray(data);
        })
    })
  return (
    <div>
      {/* {dataArray.map((element) =>(
        <Post/>
      ))} */}
      
    </div>
  )
}

export default Postlist