import React, { useState } from 'react'
import axios from 'axios';
const SignUp = () => {
    const [data,setData]=useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    });
    const {username,email,password,confirmpassword}=data;
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    // const submitHandler=e=>{
    //     e.preventDefault();
    //     if(username.length>=5){
    //         alert("username must be at least 5 character");
    //     }else if(password!==confirmpassword){
    //         alert("passwords are not matching");
    //     }else{
    //         console.log(data);
    //     }
    // }

    const submitHandler=e=>{
        e.preventDefault();
        axios.post(`https://projects-581f2-default-rtdb.firebaseio.com/register.json`,
        data).then(()=>alert("submitted succesfully"))
    }
    
  return (
    <div>
        <center>
            <form autoComplete="off" onSubmit={submitHandler}>
                <input type="text" name="username" placeholder="username" value={username} onChange={changeHandler}/><br/>
                <input type="email" name="email" placeholder="email" value={email} onChange={changeHandler}/><br/>
                <input type="password" name="password" placeholder="password" value={password} onChange={changeHandler}/><br/>
                <input type="password" name="confirmpassword" placeholder="confirmpassword" value={confirmpassword} onChange={changeHandler}/><br/>
                {password!==confirmpassword ? <p style={{"color":"red"}}>passwords not matching</p>:null}
                <input type="submit" name="submit"/><br/>
            </form>

        </center>
    </div>
  )
}

export default SignUp;