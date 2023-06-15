import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: null
    },
    reducer: {
        loadUser(state, action) {
            const locatData = JSON.parse(localStorage.getItem('auth'))
            state.data = locatData
        }

    }
})
export const { loadUser } = authSlice.actions
export default authSlice.reducer