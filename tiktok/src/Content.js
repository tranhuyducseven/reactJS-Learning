//1.useEffect(callback)
//-Goi callback moi khi component re-render
//-Goi callback sau khi component mounted
//2.useEffect(callback, [])
//-Chi goi calback 1 lan sau khi component mounted
//3.useEffect(callback, [deps])
//-callback se duoc goi lai moi khi dependencies thay doi
import {useEffect, useState} from 'react'
const tabs = ['posts', 'comments', 'albums','photos', 'todos','users']
function Content(){
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    useEffect(()=>{
      
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res=>res.json())
            .then(posts=>{
                setPosts(posts);
            })
    },[type])
    return(
        <div>
        {
            tabs.map(tab=>(
                <button
                    style={type === tab?{
                        backgroundColor:'#333',
                        color:"#fff"
                    }:{}} 
                    key={tab} 
                    onClick={()=>setType(tab)}>
                {tab}
                </button>
            ))
        }
        <input
            value={title}
            onChange={e => setTitle(e.target.value)}            
            ></input>
        <ul>{
            posts.map(post=>(
                <li key={post.id}>{post.title||post.name}</li>
            ))
        }</ul>
        </div>

    )
}
export default Content;