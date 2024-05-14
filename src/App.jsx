import { useState } from 'react'
import './App.css'
import CustomEditor from './components/Editor'
import EditorComponent from './components/Editor'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './components/home';
import Section from './components/section';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Section",
      element: <Section />
    },
   
    

  ]);

  return (
    <>
    {/* <CustomEditor/> */}
    {/* <Navbar/>
    <EditorComponent/> */}
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
