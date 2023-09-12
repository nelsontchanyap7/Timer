// Variables Initialization
  let centuryDays = document.querySelector(".Days .Century");
  let currentCenturyDays = document.createElement("span");
  let dozenDays = document.querySelector(".Days .Dozen");
  let currentDozenDays = document.createElement("span");
  let unitDays = document.querySelector(".Days .Unit");
  let currentUnitDays = document.createElement("span");
  

  let dozenHours = document.querySelector(".Hours .Dozen");
  let currentDozenHours = document.createElement("span");
  let unitHours = document.querySelector(".Hours .Unit");
  let currentUnitHours = document.createElement("span");


  let dozenMinutes = document.querySelector(".Minutes .Dozen");
  let currentDozenMinutes = document.createElement("span");
  let unitMinutes = document.querySelector(".Minutes .Unit");
  let currentUnitMinutes = document.createElement("span");

  
  let dozenSeconds = document.querySelector(".Seconds .Dozen");
  let currentDozenSeconds = document.createElement("span");
  let unitSeconds = document.querySelector(".Seconds .Unit");
  let currentUnitseconds = document.createElement("span");

// End

// algorithm  


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

//  Display 

  setInterval(()=>{

    let time = timer(clock)
 
    let days = time.days
    let daysString = days.toString().length
    let daysCentury , daysDozen , daysUnit = "0"
  
    let daysTable  = []

    switch(daysString){
      case 2 :
        daysTable[0] = days.toString()[0]
        daysTable[1] = days.toString()[1]
        daysTable.unshift("0")
        daysCentury = daysTable[0]
        daysDozen = daysTable[1]
        daysUnit = daysTable[2]
        break
      case 1 :
        daysTable[0] = days.toString()[0]
        daysTable.unshift("0")
        daysTable.unshift("0")
        daysCentury = daysTable[0]
        daysDozen = daysTable[1]
        daysUnit = daysTable[2]
        break
      default :
        daysCentury = days.toString()[0]
        daysDozen = days.toString()[1]
        daysUnit = days.toString()[2]
        break
    }

    let hours = time.hours
    hoursString = hours.toString().length
    let hoursDozen , hoursUnit = "0"

    let hoursTable = []

    switch(hoursString){
      case 1 :
        hoursTable[0] = hours.toString()[0]
        hoursTable.unshift("0")
        hoursDozen = hoursTable[0]
        hoursUnit = hoursTable[1]
        break
      default :
        hoursDozen = hours.toString()[0]
        hoursUnit = hours.toString()[1]
        break
    }

    let minutes = time.minutes
    minutesString = minutes.toString().length
    let minutesDozen , minutesUnit = "0"

    let minutesTable = []

    switch(minutesString){
      case 1 :
        minutesTable[0] = minutes.toString()[0]
        minutesTable.unshift("0")
        minutesDozen = minutesTable[0]
        minutesUnit = minutesTable[1]
        break
      default :
        minutesDozen = minutes.toString()[0]
        minutesUnit = minutes.toString()[1]
        break
    }
  

    let seconds = time.seconds
    secondsString = seconds.toString().length
    let secondsDozen , secondsUnit = "0"

    let secondsTable = []

    switch(secondsString){
      case 1 :
        secondsTable[0] = seconds.toString()[0]
        secondsTable.unshift("0")
        secondsDozen = secondsTable[0]
        secondsUnit = secondsTable[1]
        break
      default :
        secondsDozen = seconds.toString()[0]
        secondsUnit = seconds.toString()[1]
        break
    }

    centuryDays.textContent = daysCentury
    dozenDays.textContent = daysDozen
    unitDays.textContent = daysUnit
    
    dozenHours.textContent = hoursDozen
    unitHours.textContent = hoursUnit
  
    dozenMinutes.textContent = minutesDozen
    unitMinutes.textContent = minutesUnit
    
    dozenSeconds.textContent = secondsDozen
    unitSeconds.textContent = secondsUnit
    

  },700)

// End