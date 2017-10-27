console.log('fevo file')

Fevo.init({
          publisherKey: '730a4d05-1716-4788-80bc-c16d430077ab',
          env: 'prod'
      })
Fevo.purchase('.fevo-button')

console.log('you can use ES6 here : )')

// get screen size
const checkScreenWidth = function () {
  var width = window.innerWidth
  var nav = document.querySelector('nav ul')

// if window width is greater than 1280px, remove class to nav
   if (width > 1020) {
     nav.classList.remove('open')
     nav.classList.remove('closed')
   } else {
     nav.classList.add('closed')
     nav.classList.remove('open')
  }
}

checkScreenWidth()

const countdown = () => {
  const body = document.querySelector('body')

  if (body.getAttribute('id') === 'index') {
    console.log('this is the index page') 
  

// set kickoff date  
  const kickoff = new Date(2018, 9, 1)

// create variables
  let seconds  
  let minutes  
  let hours  
  let days  

// convert kickoff date to ms, subtract current time from future date
  const compareDate = () => {
    let currentTime = new Date().getTime()
    let kickoffInMS = kickoff.getTime()
    return kickoffInMS - currentTime
  }

// convert difference of future date/current time into units
  const convertTime = () => {
    seconds = Math.floor(compareDate() / 1000)
    minutes = Math.floor(seconds / 60)
    hours = Math.floor(minutes / 60)
    days = Math.floor(hours / 24)
    
    hours %= 24
    minutes %= 60
    seconds %= 60
  }

// display timer
  const countdownDisplay = () => {
    convertTime()
    
    let daysDisp = document.querySelector('#days')
    let hoursDisp = document.querySelector('#hours')
    let minDisp = document.querySelector('#minutes')
    let secDisp = document.querySelector('#seconds')
    
    daysDisp.innerHTML = `${days}:`
    hoursDisp.innerHTML = `${hours}:`
    minDisp.innerHTML = `${minutes}:`
    secDisp.innerHTML = `${seconds}`
  }
// run timer display function every second
 window.setInterval(countdownDisplay, 1000)

  }
}

countdown()

// show nav menu when hamburger is clicked

const hamburger = document.querySelector('#menu-toggle input')
const header = document.getElementById('top-nav')
const body = document.querySelector('body')

hamburger.addEventListener('change', function () {
  console.log('clicked')
  if (hamburger.checked === true) {
    header.classList.add('open')
    header.classList.remove('closed')
  } else {
    header.classList.add('closed')
    header.classList.remove('open')
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

  if (isScrolledPast) {
    header.classList.add('bg')
  } else {
    header.classList.remove('bg')
  }
}

window.addEventListener('scroll', debounce(headerColorChange))

// construction cam

const constructionCam = () => {
// set timestamp to current time on page load 
  const img = document.getElementById('cameraImage')
  const ts = new Date().getTime();
  img.src = `https://oxblue.com/archive/a9e49108373fed879685338c5bbf0cc6/800x600.jpg?ts=${ts}`

// set new timestamp every 90 seconds
  setInterval(function() {
    const img = document.getElementById('cameraImage')
    const ts = new Date().getTime();
    img.src = `https://oxblue.com/archive/a9e49108373fed879685338c5bbf0cc6/800x600.jpg?ts=${ts}`
  },90000);
}
constructionCam() 
