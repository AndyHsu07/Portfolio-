import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import all of the comoponents that we have created
import Layout from './components/Layout'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Project from './src/project'
import Service from './src/service'



const MainRouter = () => {
        return (<div>
                {/* using Layout component for other pages */}
                <Layout/>
                <Routes>
                        {/* set Routes for all of the pages */}
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/project" element={<Project />} />
                        <Route exact path="/service" element={<Service />} />
                </Routes>
        </div>
        )
}
export default MainRouter

