let militaryTime = true;
const element = document.getElementById("military-standard");
element.addEventListener("click", changeTime);
function changeTime() {
    if (!militaryTime) {
        militaryTime = true;
        document.getElementById("military-standard").innerHTML = "Display Standard Time";
    }  
    else {
        militaryTime = false;
        document.getElementById("military-standard").innerHTML = "Display Military Time";
    }
}
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (!militaryTime) {
        if (hours > 12) {
            hours -= 12;
        }
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds
}
setInterval(updateClock, 1000);