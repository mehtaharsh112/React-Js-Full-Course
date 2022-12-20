// import { useState } from 'react'
// import e from 'express'
// import React from 'react'
// function Book(props)
// {
//     console.log(props)
//     return(
//         <>
//         <h1 className="text-center" style={{color: props.color, backgroundColor:'blue', padding: '10px 20px', fontSize:'20px'}}>Book Name : {props.name}</h1>
//         <p>Pages : {props.details.pages}</p>
//         <p>Price : {props.details.price}</p>
//         </>
//     ) 
// }

// class Book extends React.Component
// {
//     constructor()
//     {
//         super()
//     this.state = {
//         filter:'',
//         data:[
//             {name:'Yashvi'},
//             {name:'Yash'},
//             {name:'Yashi'},
//             {name:'Harsh'},
//             {name:'Harshad'},
//             {name:'Mango'},
//             {name:'Mangoose'}
//         ]
//     }
   
//     }
//     searchTxt(e)
//     {
//         this.setState({filter:e.target.value})
//     }
//     render()
//     {
//         let{filter,data} = this.state
//         let DataSearch = data.filter(item => item[key].toLowercase().includes(filter.toLowerCase()))
//         return(
//             <>
//             <input type='text' value={filter} onChange={this.searchTxt.bind(this)}/>
//             {
//                 (DataSearch.map(item=>
//                     item.data
//                     ))
//             }
//             </>
//         )
//     }
// }

// export default Book


// <ul>
//   <li>America</li>
//   <li>Africa</li>
//   <li>Asia</li>
//   <li>China</li>
//   <li>Colombo</li>
//   <li>Switzerland</li>
// </ul>