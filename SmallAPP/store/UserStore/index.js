import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "userStore",
    initialState: { isLogin: false },
    reducers: {
        setIsUserLogin: (state, { payload: { isLogin } }) => {
            state.isLogin = isLogin
        },
    },
})

export const { setIsUserLogin } = slice.actions

export default slice.reducer
