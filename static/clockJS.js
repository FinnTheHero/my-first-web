const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const ampm = document.getElementById('ampm')

const hh = document.getElementById('hh')
const mm = document.getElementById('mm')
const ss = document.getElementById('ss')

setInterval(() => {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = h >= 12 ? "PM" : "AM"

    //convert 24 hour clock to simpler 12 hour clock
    if(h > 12) h = h - 12

    // add 0 in front of number that is lower than 10
    // h = (h < 10) ? "0" + h : h

    hours.innerHTML = h + "<br/><span>Hours<span/>"
    minutes.innerHTML = m + "<br/><span>Minutes<span/>"
    seconds.innerHTML = s + "<br/><span>Seconds<span/>"
    ampm.innerHTML = am

    hh.style.strokeDashoffset = 440 - (440 * h)/12
    mm.style.strokeDashoffset = 440 - (440 * m)/60
    ss.style.strokeDashoffset = 440 - (440 * s)/60
})
