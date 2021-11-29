"use strict";
// Auth page animations
const loginForm = document.querySelector(".login-container");
const signupForm = document.querySelector(".signup-container");
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
