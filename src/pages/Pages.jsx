import React from 'react'
import Home from './Home'
import {Route, Routes} from 'react-router-dom'
import Cusine from './Cusine'
import Searched from './Searched'
import Recipe from './Recipe'

function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cusine/:type" element={<Cusine />} />
        <Route path="/search/:search" element={<Searched/>} />
        <Route path="/recipe/:name" element={<Recipe/>} />
    </Routes>
  )
}



export default Pages