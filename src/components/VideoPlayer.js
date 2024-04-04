import { useEffect, useRef } from "react";

export function VideoPlayer({src,isPlaying}){
    const ref = useRef(null);

    useEffect(()=>{
        if(isPlaying){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    },[isPlaying])

return <video ref={ref} src={src}> VideoPlayer </video>

}