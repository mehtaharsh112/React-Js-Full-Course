import React, { useState } from "react";
// import MultiSelect from  'react-multiple-select-dropdown-lite'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import MultiSelect from 'multiselect-react-dropdown'
// import 'react-multiple-select-dropdown-lite/dist/index.css'
// import Content from "./Content";
import Select from "react-select";

function FormB() {
  let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const [stateSelect, setStateSelect] = useState();

  let [nameData, setNameData] = useState("");
  let [emailData, setEmailData] = useState("");
  let [passData, setPassData] = useState("");
  let [cPassData, setCPassData] = useState("");

  let [nameErr, setNameErr] = useState(false);
  let [emailErr, setEmailErr] = useState(false);
  let [passErr, setPassErr] = useState(false);
  let [cPassErr, setCPassErr] = useState(false);

  let [stateErr, setStateErr] = useState(false);

  function name(e) {
    let data = e.target.value;
    if (data === "") {
      setNameErr("Name is empty");
      // setNameErr(true)
    } else if (data.length < 3 || data.length > 20) {
      setNameErr("Invalid Name");
      // setNameErr(true)
    } else {
      setNameErr(false);
    }
    setNameData(data);
  }

  function email(e) {
    let data = e.target.value;

    // if(data==='')
    // {
    //     setEmailErr('Email is empty')
    //     // setNameErr(true)
    // }
    if (!regex.test(data) || data === "") {
      setEmailErr("Please use proper email format");
    } else {
      setEmailErr("");
    }
    // var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    // var mailformat = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
    // var mailformat = "[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}" +
    // "\\@" +
    // "[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}" +
    // "(" +
    // "\\." +
    // "[a-zA-Z0-9][a-zA-Z0-9\\-]{1,25}" +
    // ")+"
    //    if(data==='')
    //     {
    //         setEmailErr('Email is empty')
    //     }
    //     else
    //     {
    //         setEmailErr(false)
    //     }
    // if (mailformat.test(data))
    // {
    //     setEmailErr(false)
    // }
    // else
    // {
    //    setEmailErr(true)
    // }
    // else if (data.match(mailformat))
    // {
    //     alert("valid Email")
    // }
    // else if (!data.match(mailformat))
    // {
    //     // alert("Invalid Email")
    // }
    setEmailData(data);
  }
  function pass(e) {
    let data = e.target.value;
    data = data.trim();
    if (data === "") {
      setPassErr("Password is Blank");
    } else if (data.length < 6 || data.length > 20) {
      setPassErr("Password should be in the range from 6-20");
    } else {
      setPassData(data);
      setPassErr(false);
    }
    setPassData(data);
  }
  function cPass(e) {
    let dataA = e.target.value;
    if (dataA === "") {
      setCPassErr("Confirm Password Empty");
      // setCPassData('')
    } else if (dataA.length < 6 || dataA.length > 20) {
      setCPassErr("Password should be in the range from 6-20");
      // setCPassData('')
    } else if (passData != dataA) {
      setCPassErr("Password does not match");
    } else {
      setCPassData(dataA);
      setCPassErr(false);
    }
    setCPassData(dataA);
  }

  const optionList = [
    { label: "Gujarat", value: 1 },
    { label: "New York", value: 2 },
    { label: "New Jersey", value: 3 },
    { label: "California", value: 4 },
    { label: "Melbourne", value: 5 },
  ];

  // const  options  = [
  //     { label:  'Option 1', value:  'option_1'  },
  //     { label:  'Option 2', value:  'option_2'  },
  //     { label:  'Option 3', value:  'option_3'  },
  //     { label:  'Option 4', value:  'option_4'  },
  //   ]

  // const  options  = [
  //     { label:  'Option 1', value:  'option_1'  },
  //     { label:  'Option 2', value:  'option_2'  },
  //     { label:  'Option 3', value:  'option_3'  },
  //     { label:  'Option 4', value:  'option_4'  },
  //   ]
  function state(e) {
    setStateSelect(e);
    // for(let i=0; i<e.length; i++)
    // {
    //     console.log(e.length)
    //    if(!e[i].label)
    //    {
    //     setStateErr('Fill atleast one state')
    //    }
    //    else
    //    {
    //     setStateErr('')
    //    }
    // }
    // console.log(e.length)
    if (e.length == 0) {
      setStateErr("Fill atleast one state");
    } else {
      setStateErr("");
    }
  }
  let navigate = useNavigate();

  function validate(e) {
    if (
      nameData === "" ||
      emailData === "" ||
      passData === "" ||
      cPassData === ""
    ) {
      if (nameData === "") {
        alert("Name is blank");
      } else if (nameData.length < 3 || nameData.length > 20) {
        alert("Invalid Name");
      }
      if (!regex.test(emailData) || emailData === "") {
        alert("Please use proper email format");
      }
      if (passData === "") {
        alert("Password is blank");
      } else if (passData.length < 6 || passData.length > 20) {
        alert("Password should be between 6-20");
      }
      if (cPassData === "") {
        alert("Confirm Password is blank");
      } 
    } else {
        if (passData !== cPassData) {
            alert("Pls fill identical password");
          }
          
      else
      {
        navigate("/content", {
            state: {
              name: nameData,
              email: emailData,
              pass: passData,
              cpass: cPassData,
              nState: stateSelect,
            },
          });
      }
    }
  }

  return (
    <>
      {/* <form action="" className="text-center bg-secondary py-5"> */}
      <div className="text-center bg-secondary py-5">
        <h1 className="mb-0 text-info">Registration Form</h1>
        <input
          onChange={name}
          type="text"
          placeholder="Enter Name"
          className="my-5 py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill"
        />
        {nameErr}
        <br />
        <div className="d-flex justify-content-center flex-column align-items-center">
          <Select
            className="w-25 fw-bold"
            options={optionList}
            placeholder="Select State"
            value={stateSelect}
            onChange={state}
            isSearchable={true}
            isMulti
          />
          {stateErr}

          {/* <MultiSelect options={options} displayValue="State"/> */}
          {/* <MultiSelect className="bg-dark rounded-pill" options={options}/> */}
        </div>
        <input
          onChange={email}
          type="email"
          placeholder="Enter Email"
          className="my-5 py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill"
        />
        {emailErr}
        <br />
        <input
          onChange={pass}
          type="password"
          placeholder="Enter Password"
          className="py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill"
        />
        {passErr}
        <br />
        <input
          onChange={cPass}
          type="password"
          placeholder="Confirm Password"
          className="my-5 py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill"
        />
        {cPassErr}
        <br />
        {/* <Link
        to="/content"
        // onClick={validate}
          className="text-decoration-none border-0 bg-info text-white fw-bold px-5 py-2 rounded-pill">
            Log in
        </Link> */}
        <input
          type="submit"
          onClick={validate}
          className="border-0 bg-info text-white fw-bold px-5 py-2 rounded-pill"
          value="Log In"
        />
        {/* </form> */}
      </div>
    </>
  );
}
export default FormB;
