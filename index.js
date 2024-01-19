let timer = document.getElementById("timer")

let launchDate = new Date(`2024-01-19T00:00:00`).getTime()

let theTime = setInterval(function (){
    let currentTime = new Date().getTime()

    let remainingTime = launchDate - currentTime
    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((remainingTime % (1000 * 60 )) / 1000)
    timer.innerHTML = `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`
    if(remainingTime <=0){
        clearInterval()
        timer.innerHTML = `Your Website has launched`
    }
}, 1000)

