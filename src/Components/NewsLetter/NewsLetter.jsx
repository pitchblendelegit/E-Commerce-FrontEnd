import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email!</h1>
        <p1>Subscribe to our newletter and stay update</p1>
        <div>
            <input type = 'email' placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter