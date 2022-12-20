import Pagination from "./Pagination";
import Search from "./Search";
import Story from "./Story";
import React,{useContext,useReducer} from "react";
// import { AppContext } from "./AppProvider";
let Api = () => {
    // const reducer = (state,action)=>{
    //     if(action.type=='inc')
    //     {
    //         state= state+1
    //     }
    //     else if(action.type=='dec')
    //     {
    //         state= state-1
    //     }
    //   return state
    // }
    // let [state2,dispatch] = useReducer(reducer,0)
    // let data = useContext(AppContext)
  return (
    <>
        {/* <Search/>
        <Pagination/> */}
        <Story/>
        {/* <h1>{data}</h1>
        <h1>{state2}</h1>
        <button onClick={()=>dispatch({type:'inc'})}>INC</button>
        <button onClick={()=>dispatch({type:'dec'})}>DEC</button> */}
    </>
  );
};
export default Api;