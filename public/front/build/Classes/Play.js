"use strict";
class MusicPlayer extends Audio {
    constructor(audioSrc) {
        super();
        this.audio = new Audio();
        this.audio.src = audioSrc;
    }
}
