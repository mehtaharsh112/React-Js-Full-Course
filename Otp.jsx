import Box from "./Box";
import { useEffect, useState, useRef } from "react";

let Otp = () => {
  // let [seconds,setSeconds] = useState(60)
  // useEffect(()=>{
  //  seconds>0 && setTimeout(()=>{
  //   setSeconds(seconds-1)
  //  },1000)
  // },[seconds])
  const reOtp = useRef();
  const time = useRef();
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  let [seconds, setSeconds] = useState(1);
  useEffect(() => {
    time.current.style.display = "block";
    function timer() {
      setSeconds(seconds - 1);
      if (seconds <= 0) {
        time.current.setAttribute('class','dispNone');
        setSeconds(10)
      }
    }
    setTimeout(timer, 1000);
  });
  if(seconds==0)
  {
    reOtp.current.style.display='block'
  }
  function reFunc()
  {
    reOtp.current.style.display='none'
    time.current.setAttribute('class','d-block bg-dark text-white fw-bold fs-1 text-center my-5');
  }
// console.log(seconds)
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
      <h1 className="fs-4 text-center fw-bold">ENTER OTP</h1>
      
      <div className="d-flex justify-content-evenly">
        <Box ref={input1} val={box1} />
        <Box ref={input2} val={box2} />
        <Box ref={input3} val={box3} />
        <Box ref={input4} val={box4}/>
      </div>
      <h1
        id="time"
        ref={time}
        className="bg-dark text-white fw-bold fs-1 text-center my-5"
      >
        00:{seconds}
      </h1>
      <div className="d-flex my-5 justify-content-evenly">
        <button
          onClick={reFunc}
          id="btn-1"
          ref={reOtp}
          className="border-0 bg-dark text-white rounded-pill px-5 py-2 fw-bold"
        >
          Resend Otp
        </button>
        <button className="border-0 bg-info text-dark rounded-pill px-5 py-2 fw-bold">
          Submit
        </button>
      </div>
    </>
  );
};
export default Otp;