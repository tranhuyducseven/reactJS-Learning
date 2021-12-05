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
const blockChats = [
    {
        id:1,
        name: '#gaming'
    },
    {
        id:2,
        name: '#basketball'
    },
    {
        id:3,
        name: '#volleyball'
    },
    {
        id:4,
        name: '#learn reactJS'
    },
]
function Content(){
    const [blockChatId, setBlockChatId] = useState(1);
    const [chats, setChats] = useState('');
    useEffect(() =>{ 
        const handleChats = ({detail}) =>{
            console.log(detail);
            setChats(detail);
        }

        window.addEventListener(`blockChat-${blockChatId}`, handleChats);
        return () =>{
            window.removeEventListener(`blockChat-${blockChatId}`, handleChats);
        }
    },[blockChatId])
    return(
        <div>
            <ul style={{listStyle: 'none'}}>{
                blockChats.map( blockChat =>(
                    <li 
                        key={ blockChat.id}
                        style={{
                            cursor: 'pointer',
                            color:blockChatId ===  blockChat.id ?
                             'red' :
                             '#333'
                            }}
                        onClick={() =>setBlockChatId( blockChat.id)}
                        >{ blockChat.name}</li>
                ))
            }</ul>
            <p>
            {chats}
            </p>
        </div>
        
    )
}
export default Content;