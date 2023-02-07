import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ContactUs from '../ContactUs'
import HomeComp from '../HomeComp'
import ProductComp from '../ProductComp'


export default function Routing() {
  return (
 
        <div className="App">
            <Routes>
            <Route path="/" element={<HomeComp />} />

            <Route path="/homecomp" element={<HomeComp />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/productcomp" element={<ProductComp />} />




        </Routes>
        
    </div>
  )
}
