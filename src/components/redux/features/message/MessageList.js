import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { fetchAllMessage, deleteMessage } from "./MessageSlice";

const MessageList = () => {
    let arr = useSelector(state => state.message.arrMessage);
    let status = useSelector(state => state.message.status);

    let dispatch = useDispatch();
 

useEffect(()=>{
 if (status === "idle")
    dispatch(fetchAllMessage())

},[])

    return (<>
    <h1 className="h1">{status}</h1>
    <ul>
        {arr.map(item => <li key={item.user}>{item.text}
        <input type="button" value="remove" onClick={()=>dispatch(deleteMessage(item.id))}/>
        </li>)}

    </ul></>);
}

export default MessageList;