import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"


const Allroute = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}
export default Allroute