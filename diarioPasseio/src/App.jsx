import { useState } from 'react'
import Cards from './Cards'
import './App.css'
import Navbar from './Navbar'
import data from './data'
console.log(data)


export default function App() {
  const elemento = data.map((item) =>{
    return(
      <Cards
        key={item.title}
        item={item}
        />
    )
  })
  return (
    
    <>
    <Navbar />
    {elemento}
    </>
  )
}

