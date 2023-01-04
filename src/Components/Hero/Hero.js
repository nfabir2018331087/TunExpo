import React from 'react'
import icon from '../../img/wave.png'
import './Hero.css'

export default function Hero() {
  return (
    <div className='hero-bg'>
    <div className='d-flex container'>
    <div className='w-50 text-start text-white pt-xl'>
        <h1>Capture Your face and show <br/> whats on your mind</h1>
        <p className='my-4 text-white'>Is artificial intelligence less than our intelligence ?</p>
        <button className='btn-primary btn px-5 py-3 rounded-pill fs-5'> <img src={icon} className="me-2 ms-0" width="45px" height="40px" alt=""/>Explore TuneExpo</button>
        
     </div>
     <div className='w-50'>
        
     </div>
    </div>
    </div>
  )
}
