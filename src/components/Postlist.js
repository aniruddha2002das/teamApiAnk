import React from 'react'
import Post from './Post';
import { useState, useEffect } from 'react'

function Postlist() {

    const [dataArray, setDataArray] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8050/postgetData")
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setDataArray(data);
        })
    },[])
  return (
    <div>
      {dataArray.map((element) =>(
        <Post 
        id={element._id}
        title={element.title}
        description={element.description}
        writtenby={element.writtenBy}
        posttime={element.timestamp}
        noOfLike={element.like}
        noOfDislike={element.dislike}
        />
      ))}
      
    </div>
  )
}

export default Postlist
