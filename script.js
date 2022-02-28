const startTimer = document.getElementById('buttonStartTimer');
const buttonPauseTimer = document.getElementById('buttonPauseTimer');
const buttonStopTimer = document.getElementById('buttonStopTimer');
const buttonStartStopwatch = document.getElementById('buttonStartStopWatch');
const buttonStopStopwatch = document.getElementById('buttonStopStopWatch');

const elementHours = document.querySelector('.timer-hours');
const hoursButtonUp = document.querySelector('.arrowup1');
const hoursButtonDown = document.querySelector('.arrowdown1');

const elementMinutes = document.querySelector('.timer-minutes');
const minutesButtonUp = document.querySelector('.arrowup2');
const minutesButtonDown = document.querySelector('.arrowdown2');

const elementSeconds = document.querySelector('.timer-seconds');
const secondsButtonUp = document.querySelector('.arrowup3');
const secondsButtonDown = document.querySelector('.arrowdown3');

const elementStopwatch = document.querySelector('.stopwatch-time');

let currentHours = Number(elementHours.textContent);
let currentMinutes = Number(elementMinutes.textContent);
let currentSeconds = Number(elementSeconds.textContent);

let timerIsPaused = true;

let timeSeconds = 0;

const sum = (a,b,c) => {
timeSeconds = a*3600 + b*60 + c;
}

const timeChanging = () => {
	switch (event.target) {
		case hoursButtonUp:  
			if (currentHours <= 22) {
			currentHours += 1;
			}
			else if (currentHours === 23) {
			currentHours = 0;
			}
			elementHours.textContent = String(currentHours).padStart(2,'0')
			break;
		case hoursButtonDown:
			if (currentHours >= 1) {
			currentHours -=1;
			}
			else if(currentHours === 0) {
			currentHours = 23;
			}
			elementHours.textContent = String(currentHours).padStart(2,'0')
			break;
		case minutesButtonUp:
			if (currentMinutes <= 58) {
			currentMinutes += 1;
			}
			else if (currentMinutes === 59) {
			currentMinutes = 0; 
			}
			elementMinutes.textContent = String(currentMinutes).padStart(2,'0')
			break;
		case minutesButtonDown:
			if (currentMinutes >= 1) {
			currentMinutes -= 1;
			}
			else if(currentMinutes === 0) {
			currentMinutes = 59;
			}
			elementMinutes.textContent = String(currentMinutes).padStart(2,'0') 
			break;
		case secondsButtonUp:
			if (currentSeconds <= 58) {
			currentSeconds +=1
			}
			else if (currentSeconds === 59) {
			currentSeconds = 0 
			}
			elementSeconds.textContent = String(currentSeconds).padStart(2,'0')
			break;
		case secondsButtonDown:
			if (currentSeconds >= 1) {
			currentSeconds -=1
			}
			else if(currentSeconds === 0) {
			currentSeconds = 59	
			}
			elementSeconds.textContent = String(currentSeconds).padStart(2,'0')
			break;
	}
}
		
hoursButtonUp.addEventListener("click", timeChanging);
hoursButtonDown.addEventListener("click", timeChanging); 

minutesButtonUp.addEventListener("click", timeChanging);
minutesButtonDown.addEventListener("click", timeChanging);

secondsButtonUp.addEventListener("click", timeChanging);
secondsButtonDown.addEventListener("click", timeChanging);

buttonStartTimer.addEventListener("click", () => {
	sum(currentHours,currentMinutes,currentSeconds)
	const timer = setInterval(() => {
	const hour = timeSeconds/60/60%60 
	const minutes = timeSeconds/60%60 
	const seconds = timeSeconds%60
	if (timeSeconds < 1) {
		clearInterval(timer);
		elementHours.textContent = '00'
		elementMinutes.textContent = '00'
		elementSeconds.textContent = '00'
	} 
	else if (timerIsPaused === false) {
		elementHours.textContent = String(Math.trunc(hour)).padStart(2,'0');
		elementMinutes.textContent = String(Math.trunc(minutes)).padStart(2,'0');
		elementSeconds.textContent = String(Math.trunc(seconds)).padStart(2,'0');
	}
	--timeSeconds;
	}, 1000)

	buttonStopTimer.addEventListener("click", () => {
		clearInterval(timer);
		timeMinute = 0
		currentHours = 0
		currentMinutes = 0
		currentSeconds = 0
		elementHours.textContent = '00'
		elementMinutes.textContent = '00'
		elementSeconds.textContent = '00'
	}
	)
	timerIsPaused = false;
	}
	)

buttonPauseTimer.addEventListener("click", () => {
	timerIsPaused = timerIsPaused !== true;
	}
	)

buttonStartStopwatch.addEventListener("click", () => { 

	let stopwatchTime = 0
	let stopwatch = setInterval(() => {
		hour = stopwatchTime/60/60%60 
        minutes = stopwatchTime/60%60 
        seconds = stopwatchTime%60
        elementStopwatch.textContent = `${String(Math.trunc(hour)).padStart(2,'0')}:${String(Math.trunc(minutes)).padStart(2,'0')}:${String(Math.trunc(seconds)).padStart(2,'0')}`
        stopwatchTime++;
    	}, 1000)
	buttonStopStopwatch.addEventListener("click", () => {
		clearInterval(stopwatch);
		elementStopwatch.textContent = '00:00:00';
		}
	)
}
)