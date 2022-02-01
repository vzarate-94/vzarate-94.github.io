// My query selectors for my animations
const myPhoto = document.querySelector('#header-container')
const navBar = document.querySelector('#nav-bar')
const nameTitle = document.querySelector("#centered")
const portfolio = document.querySelector("#port-title")
const t1 = new TimelineMax();

// Adding animation to the nav bar for when the page is scrolled below the portfolio section
window.addEventListener('scroll', function () {
  let header = this.document.querySelector('header')
  let windowPosition = window.scrollY > 515
  header.classList.toggle('scrolling-active', windowPosition)
})

// This is for the the the name to disapear as the navbar goes over it
window.addEventListener('scroll', function () {
  let header = this.document.querySelector('.centered')
  let windowPosition = window.scrollY > 100
  header.classList.toggle('scrolling-active2', windowPosition)
})

// Controlling the animations for when the page gets restarted
t1.fromTo(myPhoto, 1, {height: "200px"}, {height: "600px", ease: Power2.easeInOut })
t1.fromTo(navBar, 1, {height: "200px"}, {height: "20px", ease: Power2.easeInOut })
t1.fromTo(nameTitle, 1, {height: "60px"}, {height: "100px", ease: Power2.easeInOut })
t1.fromTo(portfolio, 1, {height: "40px"}, {height: "70px", ease: Power2.easeInOut })