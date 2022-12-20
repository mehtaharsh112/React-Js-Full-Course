import Input from "./Input";
import Select from "react-select";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function Form() {
    const [stateSelect, setStateSelect] = useState();

    const optionList = [
        {label:'Adelaide', value:1},
        {label:'New York', value:2},
        {label:'New Jersey', value:3},
        {label:'California', value:4},
        {label:'Melbourne', value:6},
        {label:'Chicago', value:7},
        {label:'Boston', value:8},
        {label:'Texas', value:9},
        {label:'Torronto', value:10}
    ]
    function state(e)
    {
        setStateSelect(e)
        // for(let i = 0 ; i<e.length;i++)
        // {
        //   console.log(e[i].label)
        // }
    }

    let[user,setUser] = useState({
      fname:'',
      email:'',
      pass:'',
      cpass:''
    })
    let data,dataVal
    function handle(e)
    {
      data = e.target.name
      dataVal = e.target.value
      setUser({...user,[data]:dataVal})
      var email = user.email
      console.log(email)
      // var pass = user.pass
      // var cpass = user.cpass
      // console.log(email)
      // if(email=='')
      // {
      //   setUser('Email is blank')
      // }
      // else
      // {
      //   setUser('')
      // }
      console.log(user.pass)
    }

    let nav = useNavigate()
    function submit(e)
    {
      data = e.target.name
      dataVal = e.target.value
      setUser({...user,[data]:dataVal})
      setStateSelect(e)
        nav('/content', {state:{name:user.fname,email:user.email,pass:user.pass, cpass:user.cpass, nState:stateSelect}})
        // nav('/content', user)
    }
    
  return (
    <div className="bg-secondary py-5 d-flex justify-content-center align-items-center flex-column">
      <Input field={user.fname} val={handle} fetch ='fname' type="text" placeholder="Name" className="py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill" />
      <Select className= 'my-5 py-2 px-5 fw-bold fs-4 rounded-pill' options={optionList}placeholder="Select State" value={stateSelect} onChange={state} isSearchable={true} isMulti
        />
      <Input field={user.email} val={handle} fetch ='email' type="email" placeholder="Email Address" className='py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill'/>
      <Input field={user.pass} val={handle} fetch ='pass' type="password" placeholder="Password" className='my-5 py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill'/>
      <Input field={user.cpass} val={handle} fetch ='cpass' type="password" placeholder="Confirm Password" className='py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill'/>
      <Input sub={submit} type="submit" className='mt-5 py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill'/>
    </div>
  );
}
export default Form;