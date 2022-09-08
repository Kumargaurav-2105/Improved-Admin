import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PostNewJob from './Navbar/AddJobs'
import ViewJobApplicant from './Navbar/Employee'
import Applications from './Navbar/Home'
import ViewJobPosted from './Navbar/MyJobs'
import EditCompanyProfile from './Navbar/Profile'
import AdminNav from './Navbar/AdminNav'
import 'bootstrap/dist/css/bootstrap.min.css'
const Admin = () => {
    return (
        <div>
            <Router>
                <AdminNav/>
                <Routes>
                    <Route path='/admin' element={<Applications />} />
                    <Route path='/admin/addjobs' element={<PostNewJob />} />
                    <Route path='/admin/applicants' element={<ViewJobApplicant />} />
                    <Route path='/admin/myjobs' element={<ViewJobPosted />} />
                    <Route path='/admin/profile' element={<EditCompanyProfile />} />
                </Routes>
            </Router>
        </div>
    )
}
export default Admin