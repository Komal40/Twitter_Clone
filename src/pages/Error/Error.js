import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Error() {
    const navigate=useNavigate();
    function handleBa(){
        navigate("/home")
    }
  return (
    <div> <h1>No such page sry!! click on Back to home button</h1>
<button onClick={handleBa} >Back To home</button>

    </div>
  )
}
