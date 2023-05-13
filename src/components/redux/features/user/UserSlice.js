import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllUser= createAsyncThunk(
    'userInSlice/getAllUser', async (thunkAPI) => {
        const response = await axios.get("http://localhost:4000/user");
        return response.data;
    }
)

const initialState = {
    arrUser: [],
}

export const UserSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        deleteUser:(state,action)=>{
            let index=state.arrUser.findIndex(item=>item.id===action.payload)
            state.arrUser.splice(index,1)
        },
        addUser:{
           reducers:(state,action)=>{
               action.payload.id=state.arrUser[state.arrUser.length - 1].id + 1;
               state.arrUser.push(action.payload);
           },
           prepare: (objUse) => {
            return { payload: { name:objUse.name,
                email:objUse.email,
                password:objUse.password,
                profilePicture:objUse.profilePicture,
                statusMessage:objUse.statusMessage,
                lastSeen:objUse.lastSeen
            } }

        }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUser.fulfilled, (state, action) => {
            state.arrUser = action.payload;
            state.status="fulfilled";
    
        }).addCase(fetchAllUser.rejected,(state, action)=>{
            state.status="error";
            
        }).addCase(fetchAllUser.pending, (state, action) => {
            state.status="pending";
        })
    
    }
})

export const {deleteUser,addUser}=UserSlice.actions;
export default UserSlice.reducer;