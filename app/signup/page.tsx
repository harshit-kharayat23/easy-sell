"use client"

import axios from "axios"
import { useState } from "react"

export default  function signUp(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");


    return(
        <div className="w-screen h-screen flex justify-center items-center ">
            <div className="border p-2" >
                <input type="text" onChange={(e)=>setUsername(e.target.value)}  placeholder="username"/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>

                <button onClick={()=>{
                    axios.post("/api/v1/signup",{username,password})
                }}>Sign Up</button>
            </div>

             
        </div>
    )

 
}