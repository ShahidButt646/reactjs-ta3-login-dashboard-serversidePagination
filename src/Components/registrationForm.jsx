import React, { useState } from 'react';

function RegistrationForm({ setForm }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const nameHandler = (e) => {
        setName(e.target.value);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }
    const handleSignUp = (e) => {
        // add user into sesssion storage
        e.preventDefault();

        sessionStorage.setItem('userInfo', JSON.stringify({ "name": name, "password": password }));
        alert("user Registered");
        setForm(0);

    }
    return (
        <form onSubmit={(e) => { handleSignUp(e) }} className="login-fom-con">
            <h2 id="lf-title"> Registration Form </h2>
            <input
                onChange={(e) => nameHandler(e)}
                value={name}
                type="text"
                id="name"
                required
                placeholder="Enter name"
                autoComplete="off"
            />
            <input
                onChange={(e) => passwordHandler(e)}
                value={password}
                type="password"
                id="password"
                required
                placeholder="Enter password"
            />
            <input
                type="submit"
                name="submit"
                id="submit"
                value={"Sign Up"}
            />
            <p> Already have an account ?</p>
        </form >
    )
}

export default RegistrationForm