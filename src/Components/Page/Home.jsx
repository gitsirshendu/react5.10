import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authUser } from '../../Store/userSlice'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const initialValue = {
        email: '',
        password: ''
    }
    const data = useSelector((state) => state.user)

    const [user, setUser] = useState(initialValue)

    const dispatch = useDispatch()

    let name, value
    const postData = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({
            ...user,
            [name]: value
        })
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(authUser(user))
        console.log('Home Page: ');
        console.log(data?.data?.success);
        data?.data?.success ? navigate('/welcome') : toast.error(data?.data?.message)
    }

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} >
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" name="email" onChange={(e) => postData(e)} />
                                    {/* <small id="emailHelp" className="form-text text-yyed">We'll never share your email with anyone else.</small> */}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name="password" onChange={(e) => postData(e)} />
                                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>

                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                            <p>Forgot password? <Link to='/reset'>click here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
