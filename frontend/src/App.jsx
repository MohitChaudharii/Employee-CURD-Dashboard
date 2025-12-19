import React from 'react'
import Dashboard from './pages/dashboard/Dashboard';
import Navbar from './pages/header/Navbar';
import {Route, Routes} from "react-router-dom";
import NoMatch from './pages/noMatch/NoMatch';
import PostUser from './pages/employee/PostUser';
import UpdateUser from './pages/employee/UpdateUser';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/post-employee" element={<PostUser />} />
        <Route path="/post-employee/:id" element={<UpdateUser />} />
        <Route path="*" element={<NoMatch />} /> 
      </Routes>
    </div>
  )
}

export default App;