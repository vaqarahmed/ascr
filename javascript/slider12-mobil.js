const slider = [{
    imgSrc: "images/DSC_0312.JPG",
    capt: "Karlease Kelly, Provost of the USDA Virtual University and Deputy Chief Human Capital Officer for the Office of Human Resources Management, Departmental Management, provides the keynote address at the American Diversity Month Speed Mentoring event.",
    alt: "Karlease Kelly, Provost of the USDA Virtual University and Deputy Chief Human Capital Officer for the Office of Human Resources Management, Departmental Management, provides the keynote address at the American Diversity Month Speed Mentoring event.",
    hovCap: "Karlease Kelly, Provost of the USDA Virtual University and Deputy Chief Human Capital Officer for the Office of Human Resources Management, Departmental Management, provides the keynote address at the American Diversity Month Speed Mentoring event.",
  },
  {
    imgSrc: "images/DSC_0349.JPG",
    capt: "Forest Service officials' group photo at the American Diversity Month",
    alt: "Forest Service officials' group photo at the American Diversity Month",
    hovCap: "Forest Service officials' group photo at the American Diversity Month",
  },
  {
    imgSrc: "images/DSC_0003-1440.jpg",
    capt: "Theodore Gutman, Acting Deputy Assistant Secretary for Civil Rights, addressing the ASCR All Employee's Meeting.",
    alt: "Theodore Gutman, Acting Deputy Assistant Secretary for Civil Rights, addressing the ASCR All Employee's Meeting.",
    hovCap: "Theodore Gutman, Acting Deputy Assistant Secretary for Civil Rights, addressing the ASCR All Employee's Meeting.",
  },
  {
    imgSrc: "images/DSC_0018-1440.jpg",
    capt: "Theodore Gutman, Acting Deputy Assistant Secretary for Civil Rights, addressing the ASCR All Employee's Meeting.",
    alt: "Theodore Gutman, Acting Deputy Assistant Secretary for Civil Rights, addressing the ASCR All Employee's Meeting.",
    hovCap: "Theodore Gutman, Acting Deputy Assistant Secretary for Civil Rights, addressing the ASCR All Employee's Meeting.",
  },
  {
    imgSrc: "images/DSC_0383.jpg",
    capt: "USDA officials, mentors, and the planning committee stand for a group portrait at the American Diversity Month Speed Mentoring event, July 2019.",
    alt: "USDA officials, mentors, and the planning committee stand for a group portrait at the American Diversity Month Speed Mentoring event, July 2019.",
    hovCap: "USDA officials, mentors, and the planning committee stand for a group portrait at the American Diversity Month Speed Mentoring event, July 2019.",
  },

];

var intv = 4000;
var i = 0;

let sliderImg = document.querySelector("#mainImg");
let sliderComm = document.querySelector(".slider-comments");
let sliderAlt = document.querySelector("#imageAlt");
let sliderAppend = document.querySelector('.sliderHov');

var slideInterval = setInterval(swap, intv);

var boxHov = document.querySelector(".box");

boxHov.addEventListener('mousemove', (e) => {
  let newDiv = document.createElement('div');
  let d = document.querySelector('#hovComments');
  d.appendChild(newDiv);
  d.style.position = "absolute";
  d.style.left = (e.clientX - 100) + "px";
  d.style.top = (e.clientY - 260) + "px";
});




function swap() {
  sliderImg.src = slider[i].imgSrc;
  sliderImg.alt = slider[i].alt;
  sliderComm.textContent = slider[i].capt;
  sliderAppend.textContent = slider[i].hovCap;

  if (i < (slider.length - 1)) {
    i++;
  } else {
    i = 0;
  }
}


let nextImg = document.querySelector("#next");
nextImg.addEventListener('click', function () {
  sliderImg.src = slider[i].imgSrc;
  sliderImg.alt = slider[i].alt;
  sliderComm.textContent = slider[i].capt;
  sliderAppend.textContent = slider[i].hovCap;

  if (i < (slider.length - 1)) {
    i++;
  } else
    i = 0;
});

let prevImg = document.querySelector("#previous");
prevImg.addEventListener('click', function () {
  sliderImg.src = slider[i].imgSrc;
  sliderImg.alt = slider[i].alt;
  sliderComm.textContent = slider[i].capt;
  sliderAppend.textContent = slider[i].hovCap;

  if (i > 0) {
    i--;
  } else
    i = slider.length - 1;

});
