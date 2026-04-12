import './App.css'
export default function Commit({post}){
    const {id, name, email, body} = post
    return(
        <div className="card">
            <h3>Id: {id}</h3>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <p>Description: {body}</p>

        </div>
    )
}