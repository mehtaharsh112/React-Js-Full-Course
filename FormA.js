import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

function FormA() {
    const [userName, setUserName] = useState()
    const optionList = [
        { label: 'Gujarat', value: 1 },
        { label: 'New York', value: 2 },
        { label: 'New Jersey', value: 3 },
        { label: 'California', value: 4 },
        { label: 'Melbourne', value: 5 }
    ]
    const [stateSelect, setStateSelect] = useState();
    function state(e) {
        setStateSelect(e)
    }
    let [user, setUser] = useState({
        name: '',
        email: '',
        pass: '',
        cpass: ''
    })
    let name, value
    function handle(e) {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })
        setUserName(user.name)
    }
    console.log(userName)
    
    return (
        <>
            <div className="text-center bg-secondary py-5">
                <h1 className="mb-0 text-warning">Registration Form</h1>
                <input
                    type="text"
                    placeholder="Enter Name"
                    className="my-5 py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill"
                    name='name'
                    onChange={(e)=>handle(e)}
                    value={user.name}
                />
                <br />
                <div className="d-flex justify-content-center flex-column align-items-center">
                    <Select
                        className="w-25 fw-bold"
                        options={optionList}
                        onChange={state}
                        placeholder="Select State"
                        value={stateSelect}
                        isSearchable={true}
                        // isMulti
                    />
                </div>
                <input
                    type="email"
                    placeholder="Enter Email"
                    className="my-5 py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill"
                    name='email'
                    onChange={handle}
                    value={user.email}
                />
                <br />
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill"
                    name='pass'
                    onChange={handle}
                    value={user.pass}
                />
                <br />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="my-5 py-2 px-5 bg-dark fw-bold fs-4 text-white rounded-pill"
                    name='cpass'
                    onChange={handle}
                    value={user.cpass}
                />
                <br />
                {/* <Link
                    to="/content"
                    className="text-decoration-none border-0 bg-info text-white fw-bold px-5 py-2 rounded-pill">
                    Log in
                </Link> */}
                <input type="submit" />
            </div>
        </>
    )
}

export default FormA