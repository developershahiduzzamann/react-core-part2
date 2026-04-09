import { useState } from "react"

export default function Count(){

    const [count, setCount]= useState(0);
    const handelAdd =()=>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const countStyle ={
        border:'2px solid green',
        padding:'5px',
        marginBottom:'10px'
    }
    return(
        <div style={countStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handelAdd}>Count</button>
        </div>
    )
}