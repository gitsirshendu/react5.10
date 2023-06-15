import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STATUSES, resetPassword } from '../../Store/userSlice'
import { toast } from 'react-toastify'

const ResetPassword = () => {
    const data = useSelector((state) => state.user)
    const initialValue = {
        email: '',
        answer: '',
        newPassword: ''
    }
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
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(resetPassword(user))
        console.log(data?.data?.message);
        // if(data.status===STATUSES.SUCCESS){
        //     console.log('Reset Successfull');
        // }else{
        //     console.log('Reset Failed');
        // }
        data.status === STATUSES.SUCCESS ? console.log('Reset Successfull') : console.log('Reset Failed')
        // data.status === STATUSES.SUCCESS ? toast.success(data?.data?.message) : toast.error(data?.data?.message)
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
                                    <label>What is your favourite fruit?</label>
                                    <input type="text" className="form-control" name="answer" onChange={(e) => postData(e)} />
                                    {/* <small id="emailHelp" className="form-text text-yyed">We'll never share your email with anyone else.</small> */}
                                </div>
                                <div className="form-group">
                                    <label>New Password</label>
                                    <input type="password" className="form-control" name="newPassword" onChange={(e) => postData(e)} />
                                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>

                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword
