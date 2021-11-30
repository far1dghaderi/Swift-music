"use strict";
const audio = new Audio();
const musicPlayerContainer = document.querySelector(".music-player-container");
const progressbar = document.querySelector(".progressbar");
const controlboxPlayBtn = document.querySelector("#control-play-btn");
function parseAudioTime(number) {
    return (number / 60).toFixed(2);
}
function getSongsSrc(parent) {
    let srcs = [];
    parent.childNodes.forEach((child) => {
        if (child instanceof Element) {
            if (child.classList.contains("player-queue-song") &&
                child.hasAttribute("src")) {
                srcs.push(child.getAttribute("src"));
            }
        }
    });
    return srcs.reverse();
}
function updateProgressbar(duration) {
    if (progressbar instanceof HTMLInputElement) {
        progressbar.value = "0";
        progressbar.setAttribute("max", parseAudioTime(duration));
    }
}
function playSong(src) {
    audio.src = `../../public/music/${src}`;
    audio.play();
    //Update progressbar's information
    audio.onloadedmetadata = () => {
        updateProgressbar(audio.duration);
    };
}
function changePLayIcons(selectedElement) {
    selectedElement.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
    if (controlboxPlayBtn) {
        controlboxPlayBtn.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
    }
}
let queueSongs = [];
if (controlboxPlayBtn) {
    controlboxPlayBtn.addEventListener("click", () => {
        if (audio.src) {
            if (controlboxPlayBtn.classList.contains("bi-play-circle-fill")) {
                audio.play();
                controlboxPlayBtn.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
            }
            else {
                audio.pause();
                controlboxPlayBtn.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill");
            }
        }
    });
}
if (musicPlayerContainer) {
    const playerQueue = document.querySelector(".player-queue");
    if (playerQueue) {
        // #region Get all songs src from the queue
        queueSongs = getSongsSrc(playerQueue);
        //#endregion
        // #region
        //play and pause songs when the user
        //clicks on them in the queue list
        playerQueue.addEventListener("click", async (e) => {
            if (e.target instanceof Element) {
                if (e.target.id === "play-song-btn") {
                    //play the selected song and change the play icons
                    const selectedSongElement = e.target.parentElement.parentElement.parentElement;
                    if (selectedSongElement) {
                        playSong(selectedSongElement.dataset.src);
                        changePLayIcons(e.target);
                    }
                }
            }
        });
    }
}
audio.addEventListener("timeupdate", () => {
    if (progressbar instanceof HTMLInputElement) {
        console.log("hey");
        let value = parseAudioTime(audio.currentTime);
        console.log(value + "/" + parseAudioTime(audio.duration));
        progressbar.value = value;
    }
});
if (progressbar && progressbar instanceof HTMLInputElement) {
    progressbar.addEventListener("input", () => {
        if (audio.src && progressbar.value) {
            audio.currentTime = parseFloat(progressbar.value) * 60;
        }
    });
}
