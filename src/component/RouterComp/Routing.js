import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ContactUs from '../ContactUs/ContactUs'
import HomeComp from '../HomeComp'


export default function Routing() {
  return (
 
        <div className="App">
            <Routes>
            <Route path="/homecomp" element={<HomeComp />} />
            <Route path="/contactus" element={<ContactUs />} />



        </Routes>
        
    </div>
  )
}
