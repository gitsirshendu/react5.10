import React from 'react'
import { useSelector } from 'react-redux'

const Welcome = () => {
    const user = useSelector((state) => state.user)
    return (
        <>
            <div className='container'>
                <div className='row mt-5'>
                    <h1>Welcome <span style={{ fontSize: '22px' }}>{user?.data?.user?.name}</span></h1>
                </div>
            </div>
        </>
    )
}

export default Welcome
