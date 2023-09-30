// const openBtn = document.querySelector(".open-btn");
// const overlay = document.querySelector(".overlay");
// const closeBtn = document.querySelectorAll(".close-btn");

// openBtn.addEventListener("click", function() {
//     overlay.classList.add("open-modal");
// });

// closeBtnBtn.addEventListener("click", function() {
//     overlay.classList.remove("open-modal");
// });


// const btns = document.querySelectorAll(".qst_btn");
// const qstnText = document.querySelector(".question-text")

// btns.forEach( function(btn) {
// btn.addEventListener("click", function(e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
// })
// })


// const button =document.querySelectorAll(".btn");
// const ans = document.querySelector(".answer");

// button.forEach( function(btns) {
//    btns.addEventListener("click", function(e) {
//     const ans = e.currentTarget.parentElement.parentElement;
//     this.classList.toggle("show-text");
    
//     if(btns.classList.contains("show-text")) {
//       button.forEach(function (btns) {
//          ans.classList.remove("show-text");
//       });
//      ans.classList.toggle("show-text");
//     }
//    }) ;
// });


const btn = document.querySelectorAll(".btn");
console.log(btn);

btn.forEach(function (button) {
    button.addEventListener("click", function() {
        this.classList.toggle ("show-text");

    if(button.classList.contains("show-text")) {
        btn.forEach(function (button) {
            button.classList.remove("show-text");
        })
        button.classList.toggle("show-text");
    }
    });
});