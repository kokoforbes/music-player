import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setSongs, setCurrentSong, audioRef, isPlaying }) => {
  return (
    <div className='library'>
      <h2>library</h2>
      <div className='library-songs'>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            key={song.id}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            id={song.id}
            songs={songs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
