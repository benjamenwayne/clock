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
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
    let year = now.getFullYear();
    let month = monthNames[now.getMonth()];
    let day = now.getDate();
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
    document.getElementById("time").innerHTML = year + ", " + month + " " + day + ", " + hours + ":" + minutes + ":" + seconds
}
setInterval(updateClock, 1000);