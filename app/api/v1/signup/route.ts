import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client=new PrismaClient();

export  async function POST(req:NextRequest){
     
    const data=await req.json();

   await client.user.create({
        data:{
            username:data.username,
            password:data.password
        }
    })
    
    
    console.log(data);
    return NextResponse.json({
        messge:"successfully sign up"
    })
} 