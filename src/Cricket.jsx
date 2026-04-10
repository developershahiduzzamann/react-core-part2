import { useState } from "react"

export default function Cricket(){
    
    const [runs, setRuns]= useState(0)
    const handelSingle=()=>{
        const newRun = runs +1;
        setRuns(newRun)
    }
    const handelSix=()=>{
        const newSix = runs + 6;
        setRuns(newSix)
    }
    const handelFour=()=>{
        const newFour = runs + 4;
        setRuns(newFour)
    }
    
    const runStyle ={
        marginBottom:'10px',
    }
    return(
        <div style={runStyle}>
            <h3>Bangladesh Cricket Runs</h3>
            {runs > 50 && <p>Your Score Is 50</p>}
            <h1>Count: {runs}</h1>

            <button onClick={handelSingle}>Single</button>
            <button onClick={handelFour}>Four Run</button>
            <button onClick={handelSix}>Six Run</button>
        </div>
    )
}