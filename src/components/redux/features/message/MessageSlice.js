import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllMessage= createAsyncThunk(
    'messageInSlice/getAllMessage', async (thunkAPI) => {
        const response = await axios.get("http://localhost:4000/message");
        return response.data;
    }
)

const initialState = {
    arrMessage: [],
}

export const MessageSlice=createSlice({
    name:'message',
    initialState,
    reducers:{
        deleteMessage:(state,action)=>{
            let index=state.arrMessage.findIndex(item=>item.id===action.payload)
            state.arrMessage.splice(index,1)
        },
        addMessage:{
           reducers:(state,action)=>{
               action.payload.id=state.arrMessage[state.arrMessage.length - 1].id + 1;
               state.arrMessage.push(action.payload);
           },
           prepare: (objMes) => {
            return { payload: { user:objMes.user,
                room:objMes.room,
                text:objMes.text,
                timestamp:objMes.timestamp,
                type:objMes.type,
                status:objMes.status
            } }

        }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllMessage.fulfilled, (state, action) => {
            state.arrMessage = action.payload;
            state.status="fulfilled";
    
        }).addCase(fetchAllMessage.rejected,(state, action)=>{
            state.status="error";
            
        }).addCase(fetchAllMessage.pending, (state, action) => {
            state.status="pending";
        })
    
    }
})

export const {deleteMessage,addMessage}=MessageSlice.actions;
export default MessageSlice.reducer;