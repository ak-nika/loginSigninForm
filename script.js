document.addEventListener("DOMContentLoaded", () => {
    const signUpBtn = document.getElementById("signUpBtn");
    const logInBtn = document.getElementById("logInBtn");
    const form = document.getElementById("form");

    signUpBtn.addEventListener("click", () => {
        form.style.transform = "translateX(0px)";
    })

    logInBtn.addEventListener("click", () => {
        form.style.transform = "translateX(-400px)";
    })
})