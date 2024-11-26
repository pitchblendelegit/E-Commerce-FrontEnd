import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-nav">
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews {122}</div>
        </div>
        <div className="descriptionbox-description">
            <p>yukk dibelii!</p>
        </div>
    </div>
  )
}

export default DescriptionBox