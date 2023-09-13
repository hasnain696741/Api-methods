import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchAxios() {
const [mydata, setData] = useState([])
useEffect(() => {
    axios.get(`http://jsonplaceholder.typicode.com/posts/1`)
    .then((response) => {
        setData(response.data)
        // console.log(response)
    })
},[])

  return (
    <div>
      {/* {mydata.map((x,i) => {
        return(
            <div key={i}>
                <h1>{x.id}</h1>
                <h2>{x.title}</h2>
                <h3>{x.body}</h3>
              
            </div>
        )
      })} */}

      <h1>{mydata.id}</h1>
      <h3>{mydata.title}</h3>
      <h5>{mydata.body}</h5>
    </div>
  )
}

export default FetchAxios
