class MusicPlayer extends Audio {
  constructor(audioSrc: string) {
    super();
    this.audio.src = audioSrc;
  }
  audio = new Audio();
}
