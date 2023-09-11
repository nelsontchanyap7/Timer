// Variables Initialization

  // Days
  let dozenDays = document.querySelector(".Days .Dozen");
  let currentDozenDays = document.createElement("span");

  let unitDays = document.querySelector(".Days .Unit");
  let currentUnitDays = document.createElement("span");
  
  // Hours
  let dozenHours = document.querySelector(".Hours .Dozen");
  let currentDozenHours = document.createElement("span");

  let unitHours = document.querySelector(".Hours .Unit");
  let currentUnitHours = document.createElement("span");

  // Minutes
  let dozenMinutes = document.querySelector(".Minutes .Dozen");
  let currentDozenMinutes = document.createElement("span");

  let unitMinutes = document.querySelector(".Minutes .Unit");
  let currentUnitMinutes = document.createElement("span");

  // Seconds
  let dozenSeconds = document.querySelector(".Seconds .Dozen");
  let currentDozenSeconds = document.createElement("span");

  let unitSeconds = document.querySelector(".Seconds .Unit");
  let currentUnitseconds = document.createElement("span");

// End

currentDozenHours.setAttribute("class", "currentValue");
currentDozenHours.textContent = "";

dozenHours.appendChild(currentDozenHours);
setTimeout(() => {
  dozenHours.removeChild(currentDozenHours);
}, 700);


let clock = new Date("2024-01-31 00:00:00").getTime()

let day = new Date().getDate()
let month = new Date().getMonth()
let year = new Date().getFullYear()

let hours = new Date().getHours()
let minutes = new Date().getMinutes()
let seconds = new Date().getSeconds()

let time = new Date(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`).getTime()

let timeDiff =  clock - time

let days = timeDiff/(3600*1000*24)
let hoursTime = (timeDiff%(3600*1000*24))/3600

// console.log("Clock : ",clock," \nTime : ",time)
// console.log(" \nDays : ",days)
// console.log(" \nHours : ",(timeDiff%(3600*1000*24)))
// console.log(new Date(`${year}-${month}-${day}`))

console.log(new Date().getMonth())