const firstButton = document.getElementById('buttonStartTimer') 

const secondButton = document.getElementById('buttonPauseTimer') 

const thirdButton = document.getElementById('buttonResetTimer') 

const fourthButton = document.getElementById('buttonStartStopWatch')

const fifthButton = document.getElementById('buttonStopStopWatch')  

let timeSeconds = 0
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const elementHours = document.querySelector( '.number1' )  //GET VALUE OF HOURS

let currentHours = Number(elementHours.textContent) 

const hoursButtonUp = document.querySelector( '.arrowup1' ) //BUTTON UP

function getEnlargedHours() {
if (currentHours <= 22) {
	currentHours += 1
    }
else if (currentHours === 23) {
	currentHours = 0 
	}
	elementHours.textContent = String(currentHours).padStart(2,'0')
    return currentHours;
}
hoursButtonUp.addEventListener("click", getEnlargedHours)  
////////////////////////////////////////////////////////////////
const hoursButtonDown = document.querySelector( '.arrowdown1' )  //BUTTON DOWN

function getReducedHours() {
if (currentHours >= 1) {
	currentHours -=1
	}
else if(currentHours === 0) {
	currentHours = 23
	}
	elementHours.textContent = String(currentHours).padStart(2,'0'); 
	return currentHours;
}
hoursButtonDown.addEventListener("click", getReducedHours)  

currentHours = getReducedHours()
currentHours = getEnlargedHours()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const elementMinutes = document.querySelector( '.number2' )  //GET VALUE OF MINUTES

let currentMinutes = Number(elementMinutes.textContent)

const minutesButtonUp = document.querySelector( '.arrowup2' )   //BUTTON UP

function getEnlargedMinutes() {
if (currentMinutes <= 58) {
	currentMinutes +=1
	}
else if (currentMinutes == 59) {
	currentMinutes = 0 
	}
	elementMinutes.textContent = String(currentMinutes).padStart(2,'0') 
    return currentMinutes;
}
minutesButtonUp.addEventListener("click", getEnlargedMinutes)  
////////////////////////////////////////////////////////////////
const minutesButtonDown = document.querySelector( '.arrowdown2' )   //BUTTON DOWN

function getReducedMinutes() {
if (currentMinutes >= 1) {
	currentMinutes -=1
	}
else if(currentMinutes == 0) {
	currentMinutes = 59
	}
	elementMinutes.textContent = String(currentMinutes).padStart(2,'0') 
	return currentMinutes;
}
minutesButtonDown.addEventListener("click", getReducedMinutes)  

currentMinutes = getEnlargedMinutes()
currentMinutes = getReducedMinutes()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const elementSeconds = document.querySelector( '.number3' )  //GET VALUE OF SECONDS

let currentSeconds = Number(elementSeconds.textContent)

const secondsButtonUp = document.querySelector( '.arrowup3' ) //BUTTON UP

function getEnlargedSeconds() {
if (currentSeconds <= 58) {
	currentSeconds +=1
	}
else if (currentSeconds == 59) {
	currentSeconds = 0 
    }
    elementSeconds.textContent = String(currentSeconds).padStart(2,'0') 
    return currentSeconds;
}
secondsButtonUp.addEventListener("click", getEnlargedSeconds)  
////////////////////////////////////////////////////////////////
const secondsButtonDown = document.querySelector( '.arrowdown3' )  //BUTTON DOWN

function getReducedSeconds() {
if (currentSeconds >= 1) {
	currentSeconds -=1
	}
else if(currentSeconds == 0) {
		currentSeconds = 59	
	}
	elementSeconds.textContent = String(currentSeconds).padStart(2,'0') 
	return currentSeconds;
}
secondsButtonDown.addEventListener("click", getReducedSeconds)  

currentSeconds = getEnlargedSeconds()
currentSeconds = getReducedSeconds()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let isPaused = false;
function sum() {
	timeSeconds = currentHours*3600 + currentMinutes*60 + currentSeconds;
    return timeSeconds;
    }


firstButton.addEventListener("click", sum)

firstButton.addEventListener("click", () => {  ///TIMER

	secondButton.addEventListener("click", () => {if (isPaused === true) {isPaused = false} else {isPaused = true} })
   
	thirdButton.addEventListener("click", () => {
	clearInterval(timer)
	timeMinute = 0
	currentHours = 0
	currentMinutes = 0
	currentSeconds = 0
    elementHours.textContent = '00'
    elementMinutes.textContent = '00'
    elementSeconds.textContent = '00'           }  )
	

const timer = setInterval( () => {
	
hour = timeSeconds/60/60%60 
minutes = timeSeconds/60%60 
seconds = timeSeconds%60
        
    if ( timeSeconds < 1 ) {
    clearInterval(timer);
    elementHours.textContent = '00'
    elementMinutes.textContent = '00'
    elementSeconds.textContent = '00'
    } else  {
        elementHours.textContent = String(Math.trunc(hour)).padStart(2,'0');
        elementMinutes.textContent = String(Math.trunc(minutes)).padStart(2,'0');
        elementSeconds.textContent = String(Math.trunc(seconds)).padStart(2,'0');
             }
             if (isPaused != true) {
    --timeSeconds;}
}, 1000)
}

)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







