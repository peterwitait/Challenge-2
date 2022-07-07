//get date
var currentDate = new Date();

var date = addZero(currentDate.getDate());
var year = currentDate.getFullYear();

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = monthNames[currentDate.getMonth()];


var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = dayNames[currentDate.getDay()];

//HTML output - date 
document.getElementById("date").innerHTML = day + ", " + date + " " + month + " " + year;


//timeclock functions
function initClock() {
    var clock = document.getElementById('clock');
    var time = new Date();

    var hours = addZero(time.getHours());
    var minutes = addZero(time.getMinutes());
    var seconds = addZero(time.getSeconds());


    // display time
    clock.innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(initClock, 1000);

function addZero(number) {

    if (number < 10) {
        number = "0" + number;
    }

    return number;

}

//change theme - DOM manipulation
function changeToMorning() {
    console.log("Morning");
    document.getElementById("bg_container").innerHTML = '<img class="bg" src="images/morning-bg.jpg">';
    document.getElementById("bg_container").innerHTML += '<img src="images/sun.png" id="skyicon">';
}

function changeToNight() {
    console.log("Night");
    document.getElementById("bg_container").innerHTML = '<img class="bg" src="images/night-bg.jpg">';
    document.getElementById("bg_container").innerHTML += '<img src="images/moon.png" id="skyicon">';
}

//check time for theme
function checkTime() {
    if (hours >= 6 && hours <= 20) {
        changeToMorning();
    } else {
        changeToNight();
    }
}
setInterval(checkTime, 1000);





