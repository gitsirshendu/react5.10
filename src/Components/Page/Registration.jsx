import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../Store/userSlice'

const Registration = () => {
    const initialValue = {
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        answer: ''
    }
    const data = useSelector((state) => state.user)
    const dispatch=useDispatch()

    const [user, setUser] = useState(initialValue)
    let name, value
    const postData = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(user);
        dispatch(registerUser(user))
        console.log(data?.data?.status);
    }
  return (
    <>
      <div className="container">
                <div className="row mt-5">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" name="name" onChange={(e) => postData(e)} />
                                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>                                
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" name="phone" onChange={(e) => postData(e)} />
                                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" className="form-control" name="address" onChange={(e) => postData(e)} />
                                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>

                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" name="email" onChange={(e) => postData(e)} />
                                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name="password" onChange={(e) => postData(e)} />
                                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>
                                <div className="form-group">
                                    <label>What is your fabourite fruit?</label>
                                    <input type="text" className="form-control" name="answer" onChange={(e) => postData(e)} />
                                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>

                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Registration
