import React, { useState } from 'react'

const Login = () => {
    const [data,setData]=useState({
        username:'',
        password:'',
    });
    const {username,password}=data; //destructuring
    const changeHandler=e=>{ 
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler=e=>{
        e.preventDefault();
        console.log(data);
    }
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <input type="text" value={username} onChange={changeHandler}  name="username"/><br/><br/>
                <input type="password" value={password} onChange={changeHandler} name="password"/><br/><br/>
                <input type="submit" name="submit"/>
            </form>
        </center>

    </div>
  )
}

export default Login