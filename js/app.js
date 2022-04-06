const hamburger = document.querySelector('.hamburger')
const close_btn = document.querySelector('.close-btn')
const nav_links = document.querySelector('.nav-links')
const up_arrow = document.querySelector('.up-arrow')
const nav_two = document.querySelector('.nav-two')
const show = document.querySelectorAll('.show h2')
const coll = document.querySelectorAll('.coll')
const drop_btn = document.querySelectorAll('.fa-angle-down')


for (let i = 0; i < show.length; i++) {
      let show_place = coll[i]
      show[i].addEventListener('click', () => {
            show_place.classList.toggle('show')
            drop_btn[i].classList.toggle('down')
      })
      
}

hamburger.addEventListener('click', () => {
      nav_links.classList.toggle('smooth')
})

close_btn.addEventListener('click', () => {
      nav_links.classList.remove('smooth')
})

window.addEventListener('scroll', function () {
      up_arrow.classList.toggle("active-for-back", window.scrollY > 350);
      nav_two.classList.toggle("active-for-fixed", window.scrollY > 700);
//   console.log(window.scrollY)
})



// 'use strict'
// var testim = document.getElementById("testim"),
//     testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
//     testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
//     testimleftArrow = document.getElementById("left-arrow"),
//     testimRightArrow = document.getElementById("right-arrow"),
//     testimSpeed = 4500,
//     currentSlide = 0,
//     currentActive = 0,
//     testimTimer
//     ;
// // coding with nick
// window.onload = function () {

//     // Testim Script
//     function playSlide(slide) {
//         for (var k = 0; k < testimDots.length; k++) {
//             testimContent[k].classList.remove("active");
//             testimContent[k].classList.remove("inactive");
//             testimDots[k].classList.remove("active");
//         }
//         if (slide < 0) {
//             slide = currentSlide = testimContent.length - 1;
//         }
//         if (slide > testimContent.length - 1) {
//             slide = currentSlide = 0;
//         }
//         if (currentActive != currentSlide) {
//             testimContent[currentActive].classList.add("inactive");
//         }
//         testimContent[slide].classList.add("active");
//         testimDots[slide].classList.add("active");

//         currentActive = currentSlide;

//         clearTimeout(testimTimer);
//         testimTimer = setTimeout(function () {
//             playSlide(currentSlide += 1);
//         }, testimSpeed)
//     }
// // coding with nick
//     testimleftArrow.addEventListener("click", function () {
//         playSlide(currentSlide -= 1);
//     })
//     testimRightArrow.addEventListener("click", function () {
//         playSlide(currentSlide += 1);
//     })

//     for (var l = 0; l < testimDots.length; l++) {
//         testimDots[l].addEventListener("click", function () {
//             playSlide(currentSlide = testimDots.indexOf(this));
//         })
//     }
//     playSlide(currentSlide);

// }

