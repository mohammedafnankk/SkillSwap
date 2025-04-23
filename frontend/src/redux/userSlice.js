import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    userId:null
}
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.userId = action.payload
        }
    }
})
export const {setUser} = userSlice.actions;
export default userSlice.reducer;