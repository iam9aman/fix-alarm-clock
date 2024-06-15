console.log("his")
let h = document.querySelector('.hour')
let m = document.querySelector('.min')
let s = document.querySelector('.sec')
let apm = document.querySelector('.apm')
let mm = document.querySelector('#mselect')
let hh = document.querySelector('#hselect')
let ap = document.querySelector('#apselect')
let audio = new Audio('123.mp3')
let p=document.querySelector('.p')

let hhh;
let mmm;
let ppp;

// console.log(m)


setInterval(() => {
    let date = new Date()
    let hours = date.getHours()      
    // console.log(hours)
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    if(hours==12){
        hours = hours;
        apm.innerHTML = "PM"
    }else if (hours <12) {
        hours = hours;
        apm.innerHTML = "AM"
    } else {
        hours = hours - 12
        apm.innerHTML = "PM"
    }

    // console.log(hours)
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }

    h.innerHTML = hours
    m.innerHTML = minutes
    s.innerHTML = seconds
    console.log()
    let ss = 0

    if (hhh == hours && mmm == minutes && ppp == apm.innerHTML && ss == seconds) {
        audio.currentTime = 0;
        // audio.play()
        audio.play()
        console.log(hhh,mmm,ppp)
    }

}, 1000);

let setbtn = document.querySelector('.setalarm')
let rembtn = document.querySelector('.stopalarm')
setbtn.addEventListener('click', () => {
    mmm = mm.value; hhh = hh.value; ppp = ap.value
    console.log(mmm,hhh,ppp)
    p.innerHTML=`ALARM HAS SET FOR ${hhh}:${mmm}:${ppp}`
    p.classList.remove('hide')
})
rembtn.addEventListener('click', () => {
    audio.pause()
    p.classList.add('hide')
})

let addhours = () => {

    for (let index = 0; index < 60; index++) {
        // console.log (index);
        if (index < 10) {
            index = '0' + index
        }
        mm.insertAdjacentHTML('beforeend', `<option value=${index}>${index}</option>`)
    }
    for (let index = 0; index < 13; index++) {
        // console.log (index);
        if (index < 10) {
            index = '0' + index
        }
        hh.insertAdjacentHTML('beforeend', `<option value=${index}>${index}</option>`)
    }


}
addhours()