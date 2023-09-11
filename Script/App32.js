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

// algorithm  

  currentDozenHours.setAttribute("class", "currentValue");
  currentDozenHours.textContent = "";

  dozenHours.appendChild(currentDozenHours);
  setTimeout(() => {
    dozenHours.removeChild(currentDozenHours);
  }, 700);


  let clock = new Date("2024-01-31 00:00:00").getTime()

  function timer(data){

  let day = new Date().getDate()
  let month = new Date().getMonth()
  let year = new Date().getFullYear()

  let hours = new Date().getHours()
  let minutes = new Date().getMinutes()
  let seconds = new Date().getSeconds()

  let time = new Date(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`).getTime()

  let timeDiff = (data - time)/1000

  let days = Math.trunc(timeDiff/(3600*24))
  let daysMod = timeDiff%(3600*24)
  let hoursMod = daysMod%(3600)
  let minutesMod = hoursMod%(60)
  let hoursTime = Math.trunc(daysMod/3600)
  let minutesTime = Math.trunc(hoursMod/60)
  let secondsTime = minutesMod

  return {days,hours:hoursTime,minutes:minutesTime,seconds:secondsTime}

  }

  timer(clock)
//End