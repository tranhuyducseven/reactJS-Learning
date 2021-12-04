//1.useEffect(callback)
//-Goi callback moi khi component re-render
//-Goi callback sau khi component mounted
//2.useEffect(callback, [])
//-Chi goi calback 1 lan sau khi component mounted
//3.useEffect(callback, [deps])
//-callback se duoc goi lai moi khi dependencies thay doi
///----------------------------------------------------------------
//1. callback luon duoc goi sau khi component duoc mounted
//2. Cleanup function luon duoc goi truoc khi component unmounted
import {useEffect, useState} from 'react'
const tabs = ['posts', 'comments', 'albums','photos', 'todos','users']
function Content(){
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setGoToTop] = useState(false);
    const [width, setWidth] = useState(window.innerWidth )
    useEffect(()=>{
      
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res=>res.json())
            .then(posts=>{
                setPosts(posts);
            })
    },[type])
    useEffect(()=>{
        const handleScroll = () =>{
            setGoToTop(window.scrollY>=200);
           
        }
        window.addEventListener('scroll', handleScroll);
        //clean up 
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    })
    useEffect(()=>{
        const handleResize = () =>{
           setWidth(window.innerWidth);           
        }
        window.addEventListener('resize', handleResize);
        //clean up 
        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    })
    return(
        <div>
        {<h1>{width}</h1>}
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
        {
            showGoToTop&&
           ( <button
                style={{
                    position:'fixed',
                    right:20,
                    bottom:20
                }}
            >Go to top
            </button>)
        }
        </div>

    )
}
export default Content;