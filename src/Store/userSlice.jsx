import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const STATUSES = Object.freeze({
    INIT: 'initializing',
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
    SUCCESS: 'success',
    FAILED: 'failed'
})

export const registerUser = createAsyncThunk('user/register', async (data) => {
    // console.log('userSlice');
    // console.log(data);
    const response = await axios.post(`${process.env.REACT_APP_APIURL}/api/auth/register`, data)
    return response?.data
})

export const authUser = createAsyncThunk('user/auth', async (data) => {

    const response = await axios.post(`${process.env.REACT_APP_APIURL}/api/auth/login`, data)
    // console.log(response?.data);
    return response?.data
})

export const resetPassword=createAsyncThunk('user/resetpassword',async(data)=>{
    const response = await axios.post(`${process.env.REACT_APP_APIURL}/api/auth/forgot-password`, data)
    return response?.data
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {},
        status: STATUSES.INIT
    },
    reducers: {
        loadUserData(state, action) {
            const loggedUser = JSON.parse(localStorage.getItem('auth'))
            state.data = loggedUser
        },
        logoutUser(state, action) {
            localStorage.removeItem('auth')
            state.data = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authUser.pending, (state, action) => {
            state.status = STATUSES.LOADING
        })
        builder.addCase(authUser.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = STATUSES.IDLE
            // console.log('userSlice: ');
            // console.log(state.data);
            localStorage.setItem('auth', JSON.stringify(action.payload))
        })
        builder.addCase(authUser.rejected, (state, action) => {
            state.status = STATUSES.ERROR
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.status = STATUSES.SUCCESS
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.status = STATUSES.FAILED
        })
        builder.addCase(resetPassword.fulfilled,(state,action)=>{
            state.status=STATUSES.SUCCESS
        })
        builder.addCase(resetPassword.rejected,(state,action)=>{
            state.status=STATUSES.FAILED
        })
    }
})

export const { loadUserData, logoutUser } = userSlice.actions
export default userSlice.reducer