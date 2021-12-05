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
function Content(){
    const [countdown, setCountdown] =  useState(180);
    useEffect(() => {
        const timerId =setInterval(() =>{
            setCountdown(prev=>prev -1);
         }, 1000)
         return () => clearInterval(timerId);
    },[])
    return(
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}
export default Content;