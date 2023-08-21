
// let updateClock = () =>{
//     let date = new Date()
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let currentTime = hours + ":" + minutes + ":" + seconds
//     document.getElementById("clock").innerHTML = currentTime
// }
// setInterval(updateClock, 1000)



function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update the HTML elements with the extracted time values
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds

}
setInterval(updateClock, 1000);

