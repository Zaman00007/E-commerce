import React from 'react'
import "./Browse.css"

function Browse() {
  return (
    <div>
      <h1 className='head'>Browse More</h1>
      <div >
        <img src="./background-image.png" alt="image" className='image'/>
      </div>
      <div className='text'>
        <h1>Sign Up for the<br/>Latest Teatotaller News &<br/>Offers!</h1>
        <input type='text' placeholder='Email address'></input>
        <input type='submit' value='Sign Up'></input>
      </div>
    </div>
  )
}

export default Browse
