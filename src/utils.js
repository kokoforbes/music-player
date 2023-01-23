const playAudio = (isPlaying, audioRef) => {
  //ccheck if song is playing
  if (isPlaying) {
    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};

export { playAudio };
