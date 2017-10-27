console.log('timer here')
const countdown = () => {

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

countdown()

