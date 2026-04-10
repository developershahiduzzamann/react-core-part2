
import './App.css'
import Count from './Counter'
import Cricket from './Cricket'
import Users from './Users'

function App() {
  
function handelClick(){
alert('click me')
}
const handelClick2=()=>{
  alert('React Core concept Part Two')
}
const handelClick3 =(sum)=>{
  const result = sum + 5;
  alert(result)
}
  return (
    <>
      <h1>Vite + React</h1>
      <Users></Users>

      <Count></Count>
      <Cricket></Cricket>

      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click Me 2</button>
      <button onClick={()=>handelClick3(5)}>Click Me 3</button>
    </>
  )
}

export default App
    