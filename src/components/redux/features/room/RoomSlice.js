import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllRoom= createAsyncThunk(
    'roomInSlice/getAllRoom', async (thunkAPI) => {
        const response = await axios.get("http://localhost:4000/room");
        return response.data;
    }
)

const initialState = {
    arrRoom: [],
}

export const UserSlice=createSlice({
    name:'room',
    initialState,
    reducers:{
        deleteRoom:(state,action)=>{
            let index=state.arrRoom.findIndex(item=>item.id===action.payload)
            state.arrRoom.splice(index,1)
        },
        addRoom:{
           reducers:(state,action)=>{
               action.payload.id=state.arrRoom[state.arrRoom.length - 1].id + 1;
               state.arrRoom.push(action.payload);
           },
           prepare: (objRoom) => {
            return { payload: { name:objRoom.name,
                description:objRoom.description,
                users:objRoom.users,
                createdAt:objRoom.createdAt,
            } }

        }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllRoom.fulfilled, (state, action) => {
            state.arrRoom = action.payload;
            state.status="fulfilled";
    
        }).addCase(fetchAllRoom.rejected,(state, action)=>{
            state.status="error";
            
        }).addCase(fetchAllRoom.pending, (state, action) => {
            state.status="pending";
        })
    
    }
})

export const {deleteRoom,addRoom}=RoomSlice.actions;
export default RoomSlice.reducer;