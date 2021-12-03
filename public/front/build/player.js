"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var audio = new Audio();
var musicPlayerContainer = document.querySelector(".music-player-container");
var progressbar = document.querySelector(".progressbar");
var controlboxPlayBtn = document.querySelector("#control-play-btn");
function parseAudioTime(number) {
    return (number / 60).toFixed(2);
}
function getSongsSrc(parent) {
    var srcs = [];
    parent.childNodes.forEach(function (child) {
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
    audio.src = "../../public/music/".concat(src);
    audio.play();
    //Update progressbar's information
    audio.onloadedmetadata = function () {
        updateProgressbar(audio.duration);
    };
}
function changePLayIcons(selectedElement) {
    selectedElement.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
    if (controlboxPlayBtn) {
        controlboxPlayBtn.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
    }
}
var queueSongs = [];
if (controlboxPlayBtn) {
    controlboxPlayBtn.addEventListener("click", function () {
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
    var playerQueue = document.querySelector(".player-queue");
    if (playerQueue) {
        // #region Get all songs src from the queue
        queueSongs = getSongsSrc(playerQueue);
        //#endregion
        // #region
        //play and pause songs when the user
        //clicks on them in the queue list
        playerQueue.addEventListener("click", function (e) { return __awaiter(void 0, void 0, void 0, function () {
            var selectedSongElement;
            return __generator(this, function (_a) {
                if (e.target instanceof Element) {
                    if (e.target.id === "play-song-btn") {
                        selectedSongElement = e.target.parentElement.parentElement.parentElement;
                        if (selectedSongElement) {
                            playSong(selectedSongElement.dataset.src);
                            changePLayIcons(e.target);
                        }
                    }
                }
                return [2 /*return*/];
            });
        }); });
    }
}
audio.addEventListener("timeupdate", function () {
    if (progressbar instanceof HTMLInputElement) {
        console.log("hey");
        var value = parseAudioTime(audio.currentTime);
        console.log(value + "/" + parseAudioTime(audio.duration));
        progressbar.value = value;
    }
});
if (progressbar && progressbar instanceof HTMLInputElement) {
    progressbar.addEventListener("input", function () {
        if (audio.src && progressbar.value) {
            audio.currentTime = parseFloat(progressbar.value) * 60;
        }
    });
}
