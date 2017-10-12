console.log('you can use ES6 here : )')

// get screen size
const checkScreenWidth = function () {
  var width = window.innerWidth
  var nav = document.querySelector('nav ul')

// if window width is greater than 1280px, remove class to nav
   if (width > 1200) {
     nav.classList.remove('open')
     nav.classList.remove('closed')
   } else {
     nav.classList.add('closed')
     nav.classList.remove('open')
  }
}

checkScreenWidth()

// show nav menu when hamburger is clicked

const hamburger = document.querySelector('#toggle input')
const nav = document.querySelector('nav ul')
const body = document.querySelector('body')

hamburger.addEventListener('change', function () {
  console.log('clicked')
  if (hamburger.checked === true) {
    nav.classList.add('open')
    nav.classList.remove('closed')
  } else {
    nav.classList.add('closed')
    nav.classList.remove('open')
  }
}, false)

// debounce

function debounce (func, wait = 10, immediate = true) {
  var timeout
  return function () {
    var context = this, args = arguments
    var later = function () {
      timeout = null
        if(!immediate) func.apply(context, args)
          }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

// change header bg-color on scroll

function headerColorChange () {
  const header = document.getElementById('top-nav')
  
  const addClassAt = (window.scrollY + window.innerHeight) - header.clientHeight
  const divBottom = header.offsetTop + header.clientHeight
  const isScrolledPast = window.scrollY > divBottom

  console.log(window.scrollY)

  if (isScrolledPast) {
    header.classList.add('bg')
  } else {
    header.classList.remove('bg')
  }
}

window.addEventListener('scroll', debounce(headerColorChange))
