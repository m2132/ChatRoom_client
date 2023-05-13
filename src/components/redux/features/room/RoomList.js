import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { fetchAllRoom, deleteRoom } from "./RoomSlice";

const RoomList = () => {
    let arr = useSelector(state => state.room.arrRoom);
    let status = useSelector(state => state.room.status);

    let dispatch = useDispatch();
 

useEffect(()=>{
 if (status === "idle")
    dispatch(fetchAllRoom())

},[])

    return (<>
    <h1 className="h1">{status}</h1>
    <ul>
        {arr.map(item => <li key={item.name}>{item.description}
        <input type="button" value="remove" onClick={()=>dispatch(deleteRoom(item.id))}/>
        </li>)}

    </ul></>);
}

export default RoomList;