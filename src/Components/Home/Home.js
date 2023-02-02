import React from 'react'
import Camera from '../Camera/Camera'
import DragDropFiles from '../DragDropFiles/DragDropFiles'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import MusicUI from '../MusicList/MusicUI'
import Navigation from '../Navigation/Navigation'

export default function Home() {
  return (
    <div>
       
        <Hero></Hero>
        <Camera></Camera>
        <DragDropFiles></DragDropFiles>
        <MusicUI></MusicUI>
    
    </div>
  )
}
