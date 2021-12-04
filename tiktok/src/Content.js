//1.useEffect(callback)
//-Goi callback moi khi component re-render
//-Goi callback sau khi component mounted
//2.useEffect(callback, [])
//-Chi goi calback 1 lan sau khi component mounted
//3.useEffect(callback, [deps])
import {useEffect, useState} from 'react'


function Content(){
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
  
    useEffect(()=>{
        document.title = title;
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(posts => {
            setPosts(posts)
        })
    }, []);

    return (
        <div>
            <input
            value={title}
            onChange={e => setTitle(e.target.value)}            
            ></input>
            <ul>
                {posts.map(post =>
                     <li key={post.id}>{post.title}</li>
                )}
            </ul>
        </div>
    )
}
export default Content