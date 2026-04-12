
import { Suspense } from 'react'
import './App.css'
import Count from './Counter'
import Cricket from './Cricket'
import Users from './Users'
import Postes from './postes'



const fetchUsers=async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}

const loadPost= async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  return res.json()
}
function App() {
  
const usersPromise = fetchUsers()
const userPost = loadPost()

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
      <Suspense fallback={<h3>Loading....</h3>}>
        {/* <Users usersPromise ={usersPromise} ></Users> */}
        <Postes userPost ={userPost}></Postes>
      </Suspense>

      <Count></Count>
      <Cricket></Cricket>

      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click Me 2</button>
      <button onClick={()=>handelClick3(5)}>Click Me 3</button>
    </>
  )
}

export default App
    