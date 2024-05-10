import { useState } from 'react'
import './App.css'
import CustomEditor from './components/Editor'
import EditorComponent from './components/Editor'
import Navbar from './components/navbar'
function App() {

  return (
    <>
    {/* <CustomEditor/> */}
    <Navbar/>
    <EditorComponent/>
    </>
  )
}

export default App
