import React from 'react';
import { useState, useEffect } from 'react';
import "./NewOtp.css";

export default function NewOtp() {

  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [otperr, setOtpErr] = useState("");

    const move = (e, p, c, n) => {
        let length = document.getElementById(c).value.length;
        let maxlength = document.getElementById(c).getAttribute("maxLength");
        if (length == maxlength) {
            if (n !== "") {
                document.getElementById(n).focus();
            }
        }
        if (e.key === "Backspace") {
            if (p !== "") {
                document.getElementById(p).focus();
            }
        }
  }
  


  const handleOne = (e) => {
  
    if (e.target.value) {
      let result = (/^[0-9]+$/) 
      if (result.test(e.target.value)) {
        setOne(e.target.value);
        setOtpErr("");
        
      } else {
        setOne("");
        setOtpErr("please enter digit");

        
      }
    } else {
      setOne("");
      setOtpErr("Please Enter OTP");
    }
  };


  const handleTwo = (e) => {
  
    if (e.target.value) {
      let result = (/^[0-9]+$/) 
      if (result.test(e.target.value)) {
        setTwo(e.target.value);
        setOtpErr("");
        
      } else {
        setTwo("");
        setOtpErr("please enter digit");
        
      }
    } else {
      setTwo("");
      setOtpErr("Please Enter OTP");
    }
  };


  const handleThree = (e) => {
  
    if (e.target.value) {
      let result = (/^[0-9]+$/) 
      if (result.test(e.target.value)) {
        setThree(e.target.value);
        setOtpErr("");
        
      } else {
        setThree("");
        setOtpErr("please enter digit");

        
      }
    } else {
      setThree("");
      setOtpErr("Please Enter OTP");
    }
  };


  const handleFour = (e) => {
  
    if (e.target.value) {
      let result = (/^[0-9]+$/) 
      if (result.test(e.target.value)) {
        setFour(e.target.value);
        setOtpErr("");

        
      } else {
        setFour("");
        setOtpErr("please enter digit");
        
      }
    } else {
      setFour("");
      setOtpErr("Please Enter OTP");
    }
  };

//   const [counter, setCounter] = useState(59);

//   useEffect(() => {
//     const timer =
//        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
//     return () => clearInterval(timer);
//  }, [counter]);
  const [oneOtp, setOneOtp] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);


  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);


  const resendOTP = () => {
    setMinutes(0);
    setSeconds(10);
    setOneOtp(oneOtp+1);
  };

  const handleUpSubmit = (e) => {
    e.preventDefault();
    if (!one,!two,!three,!four) {
      setOtpErr("please enter details")
    }

    if (one && two && three && four && !otperr) {
      console.log("submit")
      
    } else {
      setOtpErr("please enter details")
     console.log ("noy")
    }
  }
return (
      <div>
          <div className="container">
  <div className="row justify-content-md-center">
      <div className="col-md-4 text-center">
        <div className="row">
          <div className="col-sm-12 mt-5 bgWhite">
            <div className="otp-title">
              Verify OTP
            </div>
            
            <form action="" className="mt-5">
                  <input
                    className="otp "
                    type="text"
                    id='txt1'
                    maxLength="1"
                    onKeyUp={(e) => move(e, '', 'txt1', 'txt2')}
                    onChange={(e) => handleOne(e)}
                    value={one}
                  />
                  <input
                    className="otp"
                    type="text"
                    id='txt2'
                    maxLength="1"
                    onKeyUp={(e) => move(e, 'txt1', 'txt2', 'txt3')}
                    onChange={(e) => handleTwo(e)}
                    value={two}
                  />
                  <input
                    className="otp"
                    type="text"
                    id='txt3'
                    maxLength="1"
                    onKeyUp={(e) =>
                      move(e, 'txt2', 'txt3', 'txt4')}
                    onChange={(e) => handleThree(e)}
                    value={three}
                  />
                  <input
                    className="otp"
                    type="text"
                    id='txt4'
                    maxLength="1"
                    onKeyUp={(e) => move(e, 'txt3', 'txt4', '')}
                    onChange={(e) => handleFour(e)}
                    value={four}
                  /> 
                  <p>{otperr}</p>
                </form>
                
                <hr className="mt-4" />
                
                <button
                  className='btn btn-primary btn-block mt-4 mb-4 customBtnotp'
                  onClick={(e) => handleUpSubmit(e)}
                
                >Verify</button>
                {/* <div>
                <span > Resend OTP </span>
                  <span>00:{counter}</span>
                  </div> */}
                
                 
                <div className="countdown-text"></div>
                {oneOtp == 0  ?  
                  <div>
                
                    {seconds > 0 || minutes > 0 ? (
                      <p>time remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                        {seconds < 10 ? `0${seconds}` : seconds}</p>
                    ) : (
                      <p>didn't recieve code?</p>
                    )}
                  </div> : ""}
                
                  {oneOtp == 1  ?  
                  <div>
                
                    {seconds > 0 || minutes > 0 ? (
                      <p>time remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                        {seconds < 10 ? `0${seconds}` : seconds}</p>
                    ) : (
                      <p></p>
                    )}
                  </div>  : "" }
                
                
                {oneOtp == 1 ? "" : seconds == 0 && minutes == 0 ? 
                  <button className='btn btn-primary btn-block mt-4 mb-4 customBtnot'
                    // disabled={seconds > 0 || minutes > 0}
                    // style={{
                    //   color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
                    // }}

                  
                    onClick={resendOTP}
                  >
                    Resend OTP
                  </button>  : "" }

              </div>
              
            </div>
            
      </div>
  </div>
</div>
      
    </div>
  )
}
