// getting current date function

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d = new Date();
var dateEl = document.getElementById("date");
dateEl.innerHTML = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

function saveEvent(num){
    var event = document.getElementById("event" + num);
    localStorage.setItem(num, event.value);
}

function loadEvents(){
    for (i = 9; i <= 17; i++){
        var event = document.getElementById("event" + i);
        event.value = localStorage.getItem(i);
    }
}

function checkTime(i){
    var event = document.getElementById("event" + i);
    if (d.getHours() > i){
        event.style.backgroundColor = "lightgrey";
    } 
    else if (d.getHours() < i){
        event.style.backgroundColor = "lightgreen";
    }
    else if (d.getHours() == i){
        event.style.backgroundColor = "lightcoral";
    }
}

function loadTimes(){
    for (i = 9; i <= 17; i++){
        checkTime(i);
    }
}

$(document).ready(function (){
    loadEvents();
    loadTimes();
});