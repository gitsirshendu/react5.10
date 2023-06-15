import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../Store/userSlice'

const Navbar = () => {
  const data = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutUser())
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/welcome">{data?.data?.user?.name.split(' ')[0]}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {
              data?.data?.user ? (
                <>
                  <Link className="nav-link" to="/profile">My Profile</Link>
                  <Link className="nav-link" to="/" onClick={handleLogout} >Logout</Link>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/registration">Signup</Link>
                  <Link className="nav-link" to="/">Login</Link>
                </>
              )
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar