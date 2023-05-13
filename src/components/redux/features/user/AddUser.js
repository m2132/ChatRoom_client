import { useDispatch } from "react-redux";
import {AddUser} from "./UserSlice";


const AddUser=()=>{
    let dispatch=useDispatch();

    let empty={
        name:"",
        email:"",
        password:"",
        profilePicture:"",
        statusMessage:"",
        lastSeen:""
    }

    const change=(e)=>{
        let {}
    }
}