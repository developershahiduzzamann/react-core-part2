import { use } from 'react'
import './App.css'
export default function Users({usersPromise}){
    const user = use(usersPromise)
    return(
        <div className="sCard">
            <h3>Users: {user.length}</h3>
        </div>
    )
}