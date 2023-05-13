import { useDispatch } from "react-redux";
import {AddMessage} from "./MessageSlice";


const AddMessage=()=>{
    let dispatch=useDispatch();

    let empty={
        user:"",
        room:"",
        text:"",
        timestamp:"",
        type:"",
        status:""
    }

    const change=(e)=>{
        let {}
    }
}