import lofi1 from './videos/lofi1.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react'
function Video(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))

    return (
        <video
            ref={videoRef}
            src={lofi1}
            width={250} />)

}
export default forwardRef(Video)