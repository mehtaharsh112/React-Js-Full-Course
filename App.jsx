import React from "react";
// import Otp from "./Otp";
import Time from "./Time";
import Api from "./Api";
// import { ReactDOM } from "react-router-dom";
// import Form from "./Form";
// import FormA from "./FormA";
import FormB from "./FormB";
import Content from './Content'
// import Book from './Book'
// import { Link } from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import Check from "./Check";
// import logo from './logo.svg';
// import './App.css';
// import React from "react";
// import Filter from './Filter'
// import Book from './Book'
// import { useState } from "react";
// import {Table} from './Table'
// function App()
// {
//   const [a,b] = useState('xyz')
//   function up()
//   {
//     b('qwerty')
//   }
//   return(
//     <>
//     <h1>My name : {a}</h1>
//     <button onClick={up}>Update</button>
//     </>
//   )
// }

// class App extends React.Component
// {
//   constructor()
//   {
//     super()
//     this.state = {
//       data:'Anil'
//     }
//   }
//   set()
//   {
//     this.setState(
//       {
//         data:this.state='Janvi'
//       }
//       )
//   }
//   render()
//   {
//     return(
//       <>
//       <h1 >My name is {this.state.data} </h1>
//       <button onClick={()=>this.set()}>Click</button>
//       </>
//     )
//   }
// }

// class App extends React.Component
// {
//   constructor()
//   {
//     super()
//     this.state = {
//       name:'Kavya'
// }
//   }
//   update()
//   {
//     this.setState(
//       {name:this.state='Yashvi'}
//     )
//   }
//   updatet()
//   {
//     this.setState(
//       {name:this.state='Janvi'}
//     )
//   }
//   render()
//   {
//     return(
//       <>
//       <h1>My name is : {this.state.name}</h1>
//       <button onMouseOver={()=>this.update()} onMouseOut={()=>this.updatet()}>Update</button>
//       </>
//     )
//   }
// }

// function App()
// {
//   let[a,b] = useState(2)
//   function up()
//   {
//     b(a+a)
//   }
//   return(
//     <>
//      <h1>My name is : {a}</h1>
//      <button onClick={up}>Update</button>
//     </>
//   )
// }
// function App()
// {
//   let[a,b] = useState('Book 3')
//   function up()
//   {
//     b('Book 10')
//   }
//   return(
//     <>
//     <Book name={a} color={'yellow'} details={{price:'20$',pages:400}}/>
//     <Book name="Book 2" color={'red'} details={{price:'00$',pages:800}}/>
//     <Book name="Book 9" color={'white'} details={{price:'60$',pages:200}}/>
//     <Book name="Book 12" color={'pink'} details={{price:'30$',pages:700}}/>
//     <button className='border-0 py-2 px-5 bg-dark text-white rounded-pill' onClick={()=>up()}>Update</button>
//     </>
//   )
// }

// class App extends React.Component
// {
//   constructor()
//   {
//     super()
//     this.state =
//     {
//       name:'Book 100'
//     }
//   }
// update()
// {
//   this.setState(
//     {
//       name:this.state = 'book 2020'
//     }
//   )
// }
//
//   render()
//   {
//     return(
//       <>
//            {/* <Book name={this.state.name} color={'yellow'} details={{price:'20$',pages:400}}/>
//            <Book name="Book 2" color={'red'} details={{price:'00$',pages:800}}/>
//            <Book name="Book 9" color={'white'} details={{price:'60$',pages:200}}/>
//            <Book name="Book 12" color={'pink'} details={{price:'30$',pages:700}}/>
//            <div className='text-center'>
//            <button onClick={()=>this.setState({name:this.state='Book 3030'})} className='border-0 py-2 px-5 bg-dark text-white rounded-pill fw-bold display-1'>Update</button>
//            </div> */}

//            </>
//     )
//   }
// }
// const [isActive, setActive] = useState("false");
//   const ToggleClass = () => { setActive(! isActive); };
//   return (
//     <div className={isActive ? "active" : null"}> <h1>Hello Devdojo</h1> <button onClick={ToggleClass}>Toggle class</button> </div>
//      );
// function App()
// {
// const [active,inActive] = useState(true)
//  function keyup()
//  {
// var a = document.getElementById('a').value
// console.log(a)
//  }

// return(
//   <>
// {
/* {
     active?<p className='inActive text-center display-1 fw-bold'>DATA</p>:null
    }
           <button onClick={()=>inActive(!active)} >Toggle</button>

         <div className='d-flex justify-content-evenly'>
         <button className='fs-1 py-2 px-5 border-0 bg-dark rounded-pill text-white' onClick={()=>inActive(true)} >Show</button>
           <button className='fs-1 py-2 px-5 border-0 bg-dark rounded-pill text-white' onClick={()=>inActive(false)} >Hide</button>
         </div> */
// }

// </>
// )
// }
// function App()
// {
//   const [a,b] = useState('')
//   return(
//     <>
//     <div className='text-center'>
//     <input type='text' onChange={(e)=>b(e.target.value)} className='w-100 bg-dark text-white fw-bold py-2 px-5 display-1 rounded-pill'/>
//     </div>
//     <ul className='list-unstyled my-5'>
//   <div className='d-flex justify-content-center'>
//   <li className='w-50 fs-1 text-dark fw-bold border border-dark'>Name</li>
//         <li className='w-50 fs-1 text-dark fw-bold border border-dark'>ID</li>
//   </div>
//       {
//        Filter.filter(user=>user.name.toLowerCase().includes(a)).map((user)=>(
//        <div className='d-flex justify-content-center'>
//          <li className='w-50 fs-1 text-danger border border-dark'>{user.name}</li>
//         <li className='w-50 fs-1 text-danger border border-dark'>{user.id}</li>
//        </div>
//        ))
//       }
//     </ul>
//     </>
//   )
// }

// function App()
// {
//   let[a,b] = useState('')
//   return(
//     <>
//         <div className='text-center'>
//         <input onChange={(e)=>b(e.target.value)} type='text' className='bg-primary text-warning display-1 fw-bold rounded-pill'/>
//         </div>
//        <div className='text-center d-flex justify-content-center my-5'>
//        <table className='border border-dark border-2 w-50'>

//       <div>
//       <th className='fw-bold display-1 w-100 border border-2 border-primary'>
//             Name
//           </th>
//           <th className='fw-bold display-1 w-100 border border-2 border-primary'>
//             ID
//           </th>
//       </div>

//             {Filter.filter(val=>val.name.toLowerCase().includes(a)).map((val)=>(

//              <div>
//               <tr>
//                 <td className='display-1 fw-bold text-primary w-100 border border-2 border-primary'>
//                {val.name}
//              </td>
//              <td className='display-1 fw-bold text-primary w-100 border border-2 border-primary'>
//                {val.id}
//              </td>
//              </tr>
//              </div>
//             ))}

//         </table>
//        </div>
//     </>
//   )
// }

// function App()
// {
//   let[a,b] = useState('')
//   return(
//     <>
//     <div className='text-center'>
//       <input onChange={e=>b(e.target.value.toLowerCase())} type='text' className='bg-dark text-white fw-bold fs-1 rounded-pill'/>
//     </div>
//     <div className='d-flex justify-content-center'>
//       <table className='w-50'>
//         <th className='border border-5 border-success display-1 fw-bold text-light bg-dark'>
//           ID
//         </th>
//         <th className='border border-5 border-success display-1 fw-bold text-light bg-dark'>
//           Name
//         </th>
//         {Filter.filter(valA=>valA.name.toLowerCase().includes(a)).map(val=>(
//            <tr>
//             <td className='border border-5 border-success display-1 fw-bold text-light bg-dark'>{val.id}</td>
//             <td className='border border-5 border-success display-1 fw-bold text-light bg-dark'>{val.name}</td>
//            </tr>
//         ))}

//       </table>
//     </div>
//     </>
//   )
// }

// function App()
// {
//   let[a,b] = useState('')
//   const search = (data)=> {
//       return data.filter((val)=> val.Name.toLowerCase().includes(a))
//   }
//   return(
//     <>
//       <input onChange={e=>b(e.target.value.toLowerCase())} type='text' className="rounded-pill bg-dark text-white fw-bold fs-1"/>
//     <Table data={search(Filter)}/>
//     </>
//   )
// }

// function App()
// {
//   const [a,b] = useState('ABCD')
//   const [print,setPrint] = useState(false)
//   function get(e)
//   {
//     b(e.target.value)
//     setPrint(false)
//     console.log(e.target.value)
//   }
//   return(
//     <>
//     {
//      print?
//      <h1>This is {a}</h1>
//      :null
//     }
//     <input type="text" onChange={get}/>
//     <button onClick={()=>setPrint(true)}>Update</button>
//     <input type="text" />
//     </>
//   )
// }

// function App()
// {
//   let[a,b] = useState('')
//   function myFun(e)
//   {
//     console.log(a)
//     e.preventDefault()
//   }
//   return(
//     <>
//     <form action="" onSubmit={myFun}>
//       <input type="text" onChange={(e)=>b(e.target.value)}/><br/><br/>
//       <select name="" id="" > <br></br> <br></br>
//         <option value="">Movie 1</option>
//         <option value="">Movie 2</option>
//       </select> <br></br> <br></br>
//       <input type="checkbox" /> <br></br>  <br></br>
//       <button>Submit</button>
//     </form>
//     </>
//   )
// }

// function App()
// {
//   // let[a,b] = useState(1)
//   var a = ''
// return(
//   <>
//   {a==0?<h1>0 is called</h1>
//   :a==10?<h1>LOG OUT</h1>
//   :<h1>2 is called</h1>
// }
// <form action="">
//   <input type="text" /><br/><br/>
//   <input type="email" /><br/><br/>
//   <input type="password" /><br/><br/>
//   <input type="checkbox" name="" id="" /><br/><br/>
//   <input type="submit" />
// </form>
//   </>
// )
// }

// function App() {
//   let [name,setName] = useState('')
//   let [err,setErr] = useState(false)

//   function validate()
//   {
//     // e.preventDefault()
//     // a===5?<p>{setErr('BLANK')}</p>
//     // :<p>{setErr('')}</p>

//     // if(!a)
//     // {
//     //   setErr('Field is blank')
//     // }
//   }
//   function user(e)
//   {
//     let nameData = e.target.value
//     if(nameData.length>2)
//     {
//       setErr('Invalid')
//     }
//     else
//     {
//       setErr('')
//     }
//   }
//   return (
//     <>
//       <form onSubmit={validate} action="" className="d-flex flex-column align-items-center w-100 py-5 bg-secondary">
//         <p className="text-center text-info fw-bold fs-1 mb-0 pb-5">Registration Form</p>
//         <input onChange={user} type="text" placeholder="Full Name" className="border-0 bg-dark text-white fw-bold px-5 py-2 rounded-pill" />
//         <br />
//         <br />
//         <input type="email" placeholder="Email Address" className="border-0 bg-dark text-white fw-bold px-5 py-2 rounded-pill" />
//         <br />
//         <br />
//         <input type="email" placeholder="Confirm Email Address" className="border-0 bg-dark text-white fw-bold px-5 py-2 rounded-pill" />
//         <br />
//         <br />
//         <input type="password" placeholder="Password" className="border-0 bg-dark text-white fw-bold px-5 py-2 rounded-pill" />
//         <br />
//         <br />
//         <input type="password" placeholder="Confirm Password" className="border-0 bg-dark text-white fw-bold px-5 py-2 rounded-pill" />
//         <br />
//         <br />
//         <input type="submit" className="border-0 bg-info text-white fw-bold px-5 py-2 rounded-pill" />
//       </form>
//     </>
//   );
// }

// function App()
// {
//   let[userData,setUserData] = useState('')
//   let[userErr,setUserErr] = useState(false)
//   function userHandle(e)
//   {
//     let data = e.target.value
//     if(data=='')
//     {
//       setUserErr(true)
//     }
//     else
//     {
//       setUserErr(false)
//     }
//   }
//   function validate(e)
//   {
//     e.preventDefault()
//   }
//   return(
//     <>
//     <form onSubmit={validate} action="" className="d-flex flex-column align-items-center w-100 py-5">
//     <p className="text-center text-info fw-bold fs-1 mb-0">Registration Form</p>
//     <input onChange={userHandle} type="text" placeholder="Full Name" className="my-5 border-0 bg-dark text-white fw-bold px-5 py-2 rounded-pill" />{userErr?<h1> Not Valid</h1>:""}
//       <input type="submit" className="border-0 bg-info text-white fw-bold px-5 py-2 rounded-pill"/>
//     </form>
//     </>
//   )
// }

// function App() {
//   let [userData, setUserData] = useState(false);
//   let [userErr, setUserErr] = useState(false);

//   let [emailData, setEmailData] = useState(false);
//   let [emailErr, setEmailErr] = useState(false);

//   let [passData, setPassData] = useState(false);
//   let [passErr, setPassErr] = useState(false);

//   let [cpassData, setCpassData] = useState(false);
//   let [cpassErr, setCpassErr] = useState(false);

//   function validate(e) {
//     // if (!userData || !emailData || !passData) {
//     //   e.preventDefault();
//     // }
//     console.log(cpassData)
//     // if(userErr===false)
//     // {
//     //   e.preventDefault()
//     // }
//     // if(userData=='')
//     // {
//     //   alert('blank')
//     //   e.preventDefault()
//     // }
//     // else
//     // {
//     //   alert('all good')
//     // }
//   }
//   function name(e) {
//     let data = e.target.value;
//     if (data === "") {
//       setUserErr(true);
//     } else {
//       setUserErr(false);
//     }
//     setUserData(data);
//   }

//   function emailCheck(e) {
//     let data = e.target.value;
//     if (data === "") {
//       setEmailErr(true);
//     } else {
//       setEmailErr(false);
//     }
//     setEmailData(data);
//   }

//   function passCheck(e) {
//     let data = e.target.value;
//     if (data === "") {
//       setPassErr(true);
//     } else {
//       setPassErr(false);
//     }
//     setPassData(data);
//   }
//   return (
//     <>
//       <form
//         onSubmit={validate}
//         action=""
//         className="text-center bg-secondary py-5"
//       >
//         <h1 className="mb-0 text-info">Registration Form</h1>
//         <input
//           onChange={name}
//           type="text"
//           placeholder="Enter Name"
//           className="my-5 py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill"
//         />
//         <br />
//         {userErr ? (
//           <p className="mb-5 bg-white fs-1 text-danger">
//             User Name Blank**
//           </p>
//         ) : (
//           <p className="d-none"></p>
//         )}
//         <div className="d-flex justify-content-center">
//         <select className="border-0 w-75 bg-dark text-white py-2 fs-4 px-5 rounded-pill" multiple>
//   <option value="volvo">Volvo</option>
//   <option value="saab">Saab</option>
//   <option value="opel">Opel</option>
//   <option value="audi">Audi</option>
// </select>
//         </div>
//         <input
//           onChange={emailCheck}
//           type="email"
//           placeholder="Enter Email"
//           className="my-5 py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill"
//         />
//         <br />
//         {emailErr ? (
//           <p className="mb-0 bg-white fs-1 text-danger">Email Blank**</p>
//         ) : (
//           <p className="d-none"></p>
//         )}
//         <input
//           type="email"
//           placeholder="Confirm Email Address"
//           className="py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill"
//         />
//         <br />
//         <input
//           onChange={passCheck}
//           type="password"
//           placeholder="Enter Password"
//           className="my-5 py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill"
//         />
//         <br />
//         {passErr ? (
//           <p className="mb-0 bg-white fs-1 text-danger">
//             Password Blank**
//           </p>
//         ) : (
//           <p className="d-none"></p>
//         )}
//         <input
//         onChange={(e)=>setCpassData(e.target.value)}
//           type="password"
//           placeholder="Confirm Password"
//           className="py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill"
//         />
//         <br />
//         <input
//           type="submit"
//           className="my-5 border-0 bg-info text-white fw-bold px-5 py-2 rounded-pill"
//         />
//       </form>
//     </>
//   );
// }

function App()
{
  return(
    <>
    <Routes>
      <Route path='/content' element={<Content/>} />
      <Route path='/form' element={<FormB/>} />
      {/* <Route path='/' element={<Otp/>} /> */}
      <Route path='/time' element={<Time/>} />
      <Route path="/" element={<Api/>}/>
      <Route path="/check" element={<Check/>}/>
    </Routes>
    </>
  )
}
export default App;