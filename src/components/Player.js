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

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
    });

    console.log(currentTime);
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.currentTime)}</p>
        <input type='range' name='timer' id='timer' aria-label='time control' />
        <p>{getTime(songInfo.duration)}</p>
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
        onLoadedMetadata={timeUpdateHandler}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
