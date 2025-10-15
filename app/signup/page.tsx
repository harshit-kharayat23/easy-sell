"use client"

import axios from "axios"

import { useRouter } from "next/navigation";
import { useState } from "react"

export default  function signUp(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const router=useRouter();


    return(
        <div className="w-screen h-screen flex justify-center items-center ">
            <div className="border p-2" >
                <input type="text" onChange={(e)=>setUsername(e.target.value)}  placeholder="username"/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>

                <button onClick={async()=>{
                   await  axios.post("/api/v1/signup",{username,password})
                   router.push("/signin")
                }}>Sign up </button>
            </div>

             
        </div>
    )

 
}