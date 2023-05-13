import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { fetchAllUser, deleteUser } from "./UserSlice";

const UserList = () => {
    let arr = useSelector(state => state.user.arrUser);
    let status = useSelector(state => state.user.status);

    let dispatch = useDispatch();
 

useEffect(()=>{
 if (status === "idle")
    dispatch(fetchAllUser())

},[])

    return (<>
    <h1 className="h1">{status}</h1>
    <ul>
        {arr.map(item => <li key={item.name}>{item.email}
        <input type="button" value="remove" onClick={()=>dispatch(deleteUser(item.id))}/>
        </li>)}

    </ul></>);
}

export default UserList;