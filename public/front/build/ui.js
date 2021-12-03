"use strict";
// Auth page animations
var loginForm = document.querySelector(".login-container");
var signupForm = document.querySelector(".signup-container");
var nav = document.querySelector("nav");
if (loginForm && signupForm) {
    var showSignupFormBtn = document.querySelector("#show-signup");
    var showLoginFormBtn = document.querySelector("#show-login");
    showSignupFormBtn.addEventListener("click", function () {
        loginForm.classList.add("fade-out");
        signupForm.classList.add("fade-in");
        signupForm.classList.remove("hide");
        loginForm.classList.add("hide");
    });
    showLoginFormBtn.addEventListener("click", function () {
        signupForm.classList.add("fade-out");
        loginForm.classList.add("fade-in");
        loginForm.classList.remove("hide");
        signupForm.classList.add("hide");
    });
}
// #region Show and hide music player
var showHidePlayer = document.querySelector(".display-player-btn");
if (showHidePlayer) {
    showHidePlayer.addEventListener("click", function () {
        var musicPlayerContainer = document.querySelector(".music-player-container");
        var playerWindow = document.querySelector(".music-player-container .player");
        if (showHidePlayer.classList.contains("show")) {
            showHidePlayer.classList.replace("show", "collapse");
            playerWindow.style.transform = "translateY(120%)";
        }
        else {
            showHidePlayer.classList.replace("collapse", "show");
            playerWindow.style.transform = "translateY(0%)";
        }
    });
}
//#endregion
//show player when user clicks on play button
var showMusicPlayer = function () {
    var player = document.querySelector(".music-player-container");
    var controlBox = document.querySelector(".controlers-container");
    if (player && controlBox) {
        player.classList.remove("hide");
        controlBox.classList.remove("hide");
    }
};
document.addEventListener("click", function (event) {
    if (event.target instanceof Element) {
        if (event.target.classList.contains("play-btn")) {
            showMusicPlayer();
        }
    }
});
