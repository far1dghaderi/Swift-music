"use strict";
// Auth page animations
const loginForm = document.querySelector(".login-container");
const signupForm = document.querySelector(".signup-container");
const nav = document.querySelector("nav");
if (loginForm && signupForm) {
  const showSignupFormBtn = document.querySelector("#show-signup");
  const showLoginFormBtn = document.querySelector("#show-login");
  showSignupFormBtn.addEventListener("click", () => {
    loginForm.classList.add("fade-out");
    signupForm.classList.add("fade-in");
    signupForm.classList.remove("hide");
    loginForm.classList.add("hide");
  });
  showLoginFormBtn.addEventListener("click", () => {
    signupForm.classList.add("fade-out");
    loginForm.classList.add("fade-in");
    loginForm.classList.remove("hide");
    signupForm.classList.add("hide");
  });
}
// #region Show and hide music player
const showHidePlayer = document.querySelector(".display-player-btn");
if (showHidePlayer) {
  showHidePlayer.addEventListener("click", () => {
    const musicPlayerContainer = document.querySelector(
      ".music-player-container"
    );
    const playerWindow = document.querySelector(
      ".music-player-container .player"
    );
    if (showHidePlayer.classList.contains("show")) {
      showHidePlayer.classList.replace("show", "collapse");
      playerWindow.style.transform = "translateY(120%)";
    } else {
      showHidePlayer.classList.replace("collapse", "show");
      playerWindow.style.transform = "translateY(0%)";
    }
  });
}
//#endregion

//show player when user clicks on play button
document.addEventListener("click", (event) => {
  const player = document.querySelector(".player");
  if (event.target instanceof Element) {
    if (event.target.classList.contains("play-btn")) {
      player.classList.remove("hide");
    }
  }
});
