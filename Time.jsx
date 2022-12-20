import Box from "./Box";
import { useEffect, useState, useRef } from "react";

let Time = () => {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const reBtn = useRef()
  const timeA = useRef()
  let[sec,setSec] = useState(5)
  let[btn,setBtn] = useState(0)
  useEffect(()=>{
    reBtn.current.style.display='none'
    setTimeout(()=>{
        setSec(sec-1)
        if(sec===0)
        {
            setSec(0)
            if(btn<1)
            {
                setSec(0)
                timeA.current.style.display='none'
                reBtn.current.style.display='block'
                console.log('You Can resend otp Once only')
            }
            else
            {
                timeA.current.style.display='none'
                 reBtn.current.style.display='none'
                console.log('All counts over.You can not resend otp now')
            }
        }
    },1000) 
  })

  let reFunc = ()=>{
    setBtn(btn+1)
    reBtn.current.style.display='none'
    setSec(5)
    timeA.current.style.display='block'
  }
  function box1(e) {
    var a = e.target.value.length;
    if (a === 1) {
      input2.current.focus();
    } else {
      input1.current.focus();
    }
  }
  function box2(e) {
    var a = e.target.value.length;
    if (a === 1) {
      input3.current.focus();
    } else {
      input1.current.focus();
    }
  }
  function box3(e) {
    var a = e.target.value.length;
    if (a === 1) {
      input4.current.focus();
    } else {
      input2.current.focus();
    }
  }

  function box4(e) {
    var a = e.target.value.length;
    if (a === 0) {
      input3.current.focus();
    } else {
      input4.current.focus();
    }
  }
 
  return (
    <>
      <h1 style={{color:'#C28E61', backgroundColor:'#162D52'}} className="text-center fs-1 fw-bold py-5">ENTER OTP</h1>
      
      <div className="d-flex justify-content-evenly">
        <Box ref={input1} val={box1} />
        <Box ref={input2} val={box2} />
        <Box ref={input3} val={box3} />
        <Box ref={input4} val={box4}/>
      </div>
<p ref={timeA} className="my-5 display-1 mb-0 bg-dark text-white text-center fw-bold">{sec<=9?'0'+sec:sec}</p>
      <div className="d-flex justify-content-evenly py-5">
        <button ref={reBtn} onClick={reFunc} id="btn1" className="border-0 bg-dark text-white rounded-pill px-5 py-2 fw-bold">Resend Otp</button>
        <button className="border-0 bg-info text-dark rounded-pill px-5 py-2 fw-bold">
          Submit
        </button>
      </div>
    </>
  );
};
export default Time;