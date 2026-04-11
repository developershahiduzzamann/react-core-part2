import './App.css'
export default function Comment({comment}){
    const {id, title, body}=comment;
    return(
        <div className='card'>
            <h3>id: {id}</h3>
            <h4>Title:{title}</h4>
            <p>Body:{body}</p>
        </div>
    )
}