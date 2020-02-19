// JavaScript Document

let slide = document.querySelector(".slide");
    let slideOpen = document.querySelector(".slideOpen");
    let slideClose =  document.querySelector(".slideClose");
    
    slideOpen.addEventListener('click', function(event) {
        slide.style.width = "auto";
    });
    
    slideClose.addEventListener("click", () => {
        slide.style.width = "0";
    });