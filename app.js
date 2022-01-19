window.addEventListener('scroll', function () {
  let header = this.document.querySelector('header')
  let windowPosition = window.scrollY > 615
  header.classList.toggle('scrolling-active', windowPosition)
})

window.addEventListener('scroll', function () {
  let header = this.document.querySelector('.centered')
  let windowPosition = window.scrollY > 100
  header.classList.toggle('scrolling-active2', windowPosition)
})

const myPhoto = document.querySelector('#header-container')

const t1 = new TimelineMax();

t1.fromTo(myPhoto, 1, {height: "200px"}, {height: "600px", ease: Power2.easeInOut })
