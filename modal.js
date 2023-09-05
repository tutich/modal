const openBtn = document.querySelector(".open-btn");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelectorAll(".close-btn");

openBtn.addEventListener("click", function() {
    overlay.classList.add("open-modal");
});

closeBtnBtn.addEventListener("click", function() {
    overlay.classList.remove("open-modal");
});