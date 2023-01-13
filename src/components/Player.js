import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  //STATE
  const audioRef = useRef(null);

  const [songInfo, setSongInfo] = useState({
    currenTime: null,
    duration: null,
  });

  //EVENT HANDLERS
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = () => {};

  return (
    <div className='player'>
      <div className='time-control'>
        <p>Start Time</p>
        <input type='range' name='timer' id='timer' aria-label='time control' />
        <p>End Time</p>
      </div>

      <div className='play-control'>
        <FontAwesomeIcon className='prev' size='2x' icon={faAngleLeft} />

        {isPlaying ? (
          <FontAwesomeIcon
            onClick={playSongHandler}
            className='play'
            size='2x'
            icon={faPause}
          />
        ) : (
          <FontAwesomeIcon
            onClick={playSongHandler}
            className='play'
            size='2x'
            icon={faPlay}
          />
        )}

        <FontAwesomeIcon className='next' size='2x' icon={faAngleRight} />
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
