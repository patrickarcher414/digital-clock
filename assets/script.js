const d = new Date
let date = d.getDate()
const weekday = document.querySelector('#weekday')
const dateOne = document.querySelector('#date')
const time = document.querySelector('#time')
let newHour
let newMinutes
let newDate
let meridiem

const getDateSuffix = (n)=> {
  let dateStr = n.toString()
  const suffix = dateStr.charAt(dateStr.length - 1)
  let y
    if (suffix === '1' && dateStr !== '11') { y = 'st'} 
    else if (suffix ==='2' && dateStr !== '12') { y = 'nd'}
    else if (suffix === '3' && dateStr !== '13') { y = 'rd'}
    else { y = 'th'}
  return y
}

const getCurrentDay = ()=> {
  let today = d.getDay()
  if ( today = 0) {return 'Sun'}
  if ( today = 1) {return 'Mon'}
  if ( today = 2) {return 'Tues'}
  if ( today = 3) {return 'Wed'}
  if ( today = 4) {return 'Thurs'}
  if ( today = 5) {return 'Fri'}
  if ( today = 6) {return 'Sat'}
}

const displayDay = ()=> {
  weekday.innerHTML = getCurrentDay()
}

const getCurrentDate = ()=> {
  let suffix = getDateSuffix(date)
  const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
  let monthName = month[d.getMonth()]
  let year = d.getFullYear()
  let fullDate = `${monthName} ${date}${suffix} ${year}`
  return fullDate
}

const displayDate = ()=> {
  dateOne.innerHTML = getCurrentDate()
}

const getCurrentTime = () => {
  const hours = d.getHours()
  const minutes = d.getMinutes()
  
  if ( hours > 12) {
    newHour = hours - 12
    meridiem = 'PM'
  } else {
    newHour = hours
    meridiem = 'AM'
  }
  if (minutes <= 9) {
    newMinutes = `0${minutes}`
  } else {
    newMinutes = minutes
  }
  let currentTime = `${newHour}:${newMinutes} ${meridiem}`
  time.innerHTML = currentTime
}

displayDay()
displayDate()
setTimeout(getCurrentTime, 1000)