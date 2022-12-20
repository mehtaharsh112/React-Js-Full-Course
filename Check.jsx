import React,{useState} from "react";
import './Check.css'

var tog = document.getElementById('toggle')
let Check = () => {
    let [check,setCheck] = useState(false)
    let [modal,setModal] = useState(false)
    var tog = document.getElementById('toggle')
    function change(e)
    {
        var cbox = e.target.value
            setModal(true)
        setCheck(cbox)
    }

    function checkout()
    {
        if(check==true)
        {
            console.log(`Cancel button ${check} `)
            tog.checked = !check
        }
        else
        {
            console.log(`Cancel button ${check} `)
            tog.checked = !check
        }
        setModal(false)
    }
    function checkIn()
    {
        if(check==true)
        {
            console.log(`OK button ${check} `)
            tog.checked = check
        }
        else
        {
            console.log(`OK button ${check} `)
            tog.checked = check
        }
        setModal(false)
    }

    return(
        <>
         {/* <input id='toggle' onClick={change} type="checkbox" name=""/> */}
         <label className="switch">
  <input onClick={change} id='toggle' type="checkbox"/>
  <span className="slider round"></span>
</label>
        <div className="d-flex justify-content-center">
        {modal? <div className="py-5 rounded bg-warning d-flex justify-content-center flex-column w-50">
          <p className="text-center fw-bold text-danger fs-2">Want an active State ?</p>
      <div className="d-flex justify-content-evenly">
            <button onClick={checkout} className="bg-danger border-0 rounded-pill py-2 px-5 fw-bold">Cancel</button>
            <button onClick={checkIn} className="bg-success border-0 rounded-pill py-2 px-5 fw-bold">Ok</button>
        </div>
      </div>:'' }
      {/* {modalTwo? <div className="py-5 rounded bg-warning d-flex justify-content-center flex-column w-50">
          <p className="text-center fw-bold text-danger fs-2">Want an In active State ?</p>
      <div className="d-flex justify-content-evenly">
            <button onClick={checkout} className="bg-danger border-0 rounded-pill py-2 px-5 fw-bold">Cancel</button>
            <button onClick={checkIn} className="bg-success border-0 rounded-pill py-2 px-5 fw-bold">Ok</button>
        </div>
      </div>:'' } */}
        </div>
        </>
    )
}

export default Check