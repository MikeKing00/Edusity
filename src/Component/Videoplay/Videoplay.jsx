import React, { useRef } from 'react'
import './Videoplay.css'
import Video_play from '../../assets/Videoplay.mp4'

const Videoplay = ({playState, setPlayState}) => {

    const player = useRef(null);

        const hideJob = (e)=> {
            if(e.target === player.current) {
                setPlayState(false);
            }
        }


  return (
    <div className={`Video-play ${playState? '' : 'hide'}`} ref={player} onClick={hideJob}>
        <video src={Video_play} autoPlay muted controls></video>

    </div>
  )
}

export default Videoplay