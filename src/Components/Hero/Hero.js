import React from 'react'
import icon from '../../img/wave.png'
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import './Hero.css'

export default function Hero() {
  return (
    <div className='hero-bg'>
    <div className='d-flex container'>
    <div className='w-50 text-start text-white pt-xl'>
        <h1 className='fontHero'>Capture Your face and show <br/> whats on your mind</h1>
        <p className='my-4  fontP text-white'>Artificial intelligence  is not less than our intelligence </p>
        <button className='btn-primary btn px-5 py-2 rounded-3 fs-5'> <GraphicEqIcon className='me-1 my-auto'/> Explore TuneExpo</button>
        
     </div>
     <div className='w-50'>
        
     </div>
    </div>
    </div>
  )
}
