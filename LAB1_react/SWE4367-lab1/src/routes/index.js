import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "../pages/Home";

export const AppRoutes = () => {
  return(

    <Router>
        <Routes>
            <Route exect path="/" element={<Home/>}/>
        </Routes>
    </Router>
   )

}
