import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "../features/message/MessageSlice";
import roomSlice from "../features/room/RoomSlice";
import userSlice from "../features/user/UserSlice"


export const store = configureStore({
    reducer: {
        message: messageSlice,
        room:roomSlice,
        user:userSlice
    },
})