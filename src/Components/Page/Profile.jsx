import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


const Profile = () => {
    const data = useSelector((state) => state.user)
    return (
        <>
            <div className="container">
                <div className="card mt-5">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg">
                                <strong>ID:</strong> {data?.data?.user?._id.substr(-6).toUpperCase()}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg">
                            <strong>Name:</strong> {data?.data?.user?.name}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg">
                            <strong>Email:</strong> {data?.data?.user?.email}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg">
                            <strong>Phone:</strong> {data?.data?.user?.phone}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg">
                            <strong>Address:</strong> {data?.data?.user?.address}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
