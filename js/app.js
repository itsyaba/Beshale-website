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
