import React, { useState } from 'react';

const Onchange = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    });
    const { username, password } = data;

    const handler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data); // This will log the current state when the form is submitted
        // You can perform additional actions here, such as sending the data to a server
    }

    return (
        <div>
            <center>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='Username' value={username} name="username" onChange={handler} /><br /><br /><br />
                    <input type="password" placeholder='Password' value={password} name="password" onChange={handler} /><br /><br /><br />
                    <input type="submit" value="Submit" /><br />
                </form>
            </center><br />
        </div>
    )
}

export default Onchange;
