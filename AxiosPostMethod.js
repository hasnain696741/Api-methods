import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AxiosPostMethod() {
    const [mytitle, setTitle] = useState("");
    const [mybody, setBody] = useState("");
    const navigate = useNavigate()
    const handlesubmit = (e) => {
    // e.PreventDefault();
axios.post(`http://jsonplaceholder.typicode.com/posts`, {
    title:mytitle,
    body:mybody
}).then((response) => {
    // console.log(response)
    setTitle(response)
}).then((result) => {
    setBody(result)
}).catch((err) => {
    console.log(err)
})
navigate(`postData`)
       
    }
   

  return (
    <>
      <form onSubmit={handlesubmit}>

        {/* <label>Enter Title : </label> */}
        <input type="text" name='title'  placeholder='Enter Title' value={mytitle} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <br />
        <br />
        {/* <label>Enter Body : </label> */}
        <input type="text" name='body' placeholder='Enter Body' value={mybody} onChange={(e) => setBody(e.target.value)} />
        <br />
        <br />
        <br />
        <input type="submit" value='post' />
      </form>
    </>
  )
}

export default AxiosPostMethod
