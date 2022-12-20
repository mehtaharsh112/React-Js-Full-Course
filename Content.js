import { Link, useLocation} from "react-router-dom"
function Content()
{
  var location = useLocation()
 
    return(
       <div className=" px-5 py-5">
         <h1>Welcome : {location.state.name} </h1>
        <h1 className="my-5">Email :  {location.state.email} </h1>
        <h1 className="my-5">State Selected : {location.state.nState.map(e=>e.label+',')} </h1>
        <h1>Password : {location.state.pass}</h1>
        <h1>Confirm Password : {location.state.cpass} </h1>
        <Link className="bg-success rounded-pill px-5 py-2 text-light fw-bold text-center text-decoration-none" to='/form'>HOME</Link>
       </div>
    )
}
export default Content