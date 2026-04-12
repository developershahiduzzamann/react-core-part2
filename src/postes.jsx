import Commit from "./commit"
import { use } from "react"
import './App.css'
export default function Postes({userPost}){
    const posts = use(userPost)
    return(
        <div className='sCard'>
            <h3>This Is A All Post: {posts.length}</h3>
            {posts.map(post =><Commit key={post.id } post ={post}></Commit>)}
        </div>
    )
}