
import './App.css'
import 

function App() {
  const handelClick =()=>{
    alert("I Love You")
  }
  const handelClickTwo = (sum)=>{
    const result = sum +7;
    alert(result);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={()=>handelClickTwo (10)}>Click Me</button>
    </>
  )
}

export default App
    