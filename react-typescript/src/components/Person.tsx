import React, { useState } from "react";

export interface Props{

    name:string,
    age:number,
    email:string
    //getName:()=>string
}

export const Person=(props:Props)=>
{
    const[city,setCity]=useState<string| null>("");

    return(
        <div>
            <h2>{props.age}</h2>
            <h2>{props.name}</h2>
            <h2>{props.email}</h2>
            <input type="text" onChange={e=>setCity(e.target.value)}/>
        </div>
    )
}