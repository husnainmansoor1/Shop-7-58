import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className="main-btn">
            <button className='button'>SHOP NOW</button>
            <button className='main-btn-2'>CATEGORY</button>
          </div>
          <div className="shop">
            <p>Available On</p>
            <div className="shop-img">
              <img src="public\assets\flipkart.png" alt="" />
              <img src="public\assets\amazon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="main-image">
          <img src="public\assets\shoe_image.png" alt="Shoes" />
  </div>
      </div>
    </>
  )
}

export default Main
