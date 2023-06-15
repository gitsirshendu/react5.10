import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../Page/Home'
import Navbar from './Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Profile from '../Page/Profile'
import Welcome from '../Page/Welcome'
import Registration from '../Page/Registration'
import { useDispatch } from 'react-redux'
import { loadUserData } from '../../Store/userSlice'
import ResetPassword from '../Page/ResetPassword'

const Routing = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUserData())
    }, [])
    return (
        <>
            <Router>
                <Navbar />
                <ToastContainer />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/welcome' element={<Welcome />} />
                    <Route path='/registration' element={<Registration />} />
                    <Route path='/reset' element={<ResetPassword />} />
                </Routes>
            </Router>
        </>
    )
}

export default Routing
