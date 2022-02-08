const firstButton = document.getElementById('buttonSetTimer') 

const secondButton = document.getElementById('buttonStopWatch') 

const thirdButton = document.getElementById('buttonLap') 

const fourthButton = document.getElementById('buttonStart')

const fifthButton = document.getElementById('buttonStop')  

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
let isPaused = false
function sum() {
	timeSeconds = currentHours*3600 + currentMinutes*60 + currentSeconds;
    return timeSeconds;
    }
secondButton.addEventListener("click", () => { isPaused = true; })

firstButton.addEventListener("click", sum)

firstButton.addEventListener("click", () => { 

isPaused = false;
    
thirdButton.addEventListener("click", () => {
	clearInterval(timer)
	timeMinute = 0
	currentHours = 0
	currentMinutes = 0
	currentSeconds = 0
    elementHours.textContent = '00'
    elementMinutes.textContent = '00'
    elementSeconds.textContent = '00'
}
)
	
	let timer = setInterval( () => {
    hour = timeSeconds/60/60%60 
    minutes = timeSeconds/60%60 
	seconds = timeSeconds%60
    
    
    
    if (timeSeconds < 1 && isPaused !== true) {
    clearInterval(timer);
    elementHours.textContent = '00'
    elementMinutes.textContent = '00'
    elementSeconds.textContent = '00'
    } else {

        elementHours.textContent = String(Math.trunc(hour)).padStart(2,'0');
        elementMinutes.textContent = String(Math.trunc(minutes)).padStart(2,'0');
        elementSeconds.textContent = String(Math.trunc(seconds)).padStart(2,'0');
    }
    --timeSeconds;
}, 1000)
}
)






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






















/*

}

let result = sum(currentHours,currentMinutes,currentSeconds);
*/




























/*


secondsCounter = () => {
	let secondsTimer = () =>  { if ( num3Out > 0 ) { 
	num3Out = num3Out -1
	num3In.textContent = String( num3Out ).padStart( 2,'0' )
	console.log( num3Out )
}
    else if ( num3Out == 0 ) {
    clearInterval( setIntSec )
}

}
    let setIntSec = setInterval( secondsTimer, 1000 )
}


firstButton.addEventListener( "click", secondsCounter )
*/

/*


let reset = () => { 
num1Out = 0
num2Out = 0
num3Out = 0
num1In.textContent = String( 0 ).padStart( 2,'0' ) 
num2In.textContent = String( 0 ).padStart( 2,'0' ) 
num3In.textContent = String( 0 ).padStart( 2,'0' ) 
}

secondButton.addEventListener( "click", reset )


*/









