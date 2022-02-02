/*red buttons*/
const firstButton = document.getElementById('buttonSetTimer') 

const secondButton = document.getElementById('buttonStopWatch')

const thirdButton = document.getElementById('buttonLap')

const fourthButton = document.getElementById('buttonStart')

const fifthButton = document.getElementById('buttonStop')
/*red buttons*/










let num1In = document.querySelector( '.number1' )  /*get value of HOURS*/

let num1Out = 0

num1Out = parseInt(num1In.textContent)

console.log(num1Out)


let arrowUp1 = document.querySelector( '.arrowup1' ) /* First arrow up +1 (HOURS) */


function foo1() {
if (num1Out <= 22) {
	num1Out +=1
    }
    else if (num1Out == 23) {
	num1Out = 0 
	}
    console.log(num1Out)
    num1In.textContent = String(num1Out).padStart(2,'0'); /*shows counter +"0" ... 01,02,03,04,05,06,07,08,09,10,11*/
    return num1Out;
}


arrowUp1.onclick = foo1



let arrowDown1 = document.querySelector( '.arrowdown1' ) /* First arrow down -1 (HOURS) */


function foo2() {
if (num1Out >= 1) {
	num1Out -=1
	}
else if(num1Out == 0) {
	num1Out = 23
	}
	console.log(num1Out)
	num1In.textContent = String(num1Out).padStart(2,'0'); /*shows counter +"0" ... 01,02,03,04,05,06,07,08,09,10,11*/
	return num1Out;
}


arrowDown1.onclick = foo2

num1Out = foo1()
num1Out = foo2()









let num2In = document.querySelector( '.number2' )  /*get value of MINUTES*/

let num2Out = 0

num2Out = parseInt(num2In.textContent)

console.log(num2Out)


let arrowUp2 = document.querySelector( '.arrowup2' ) /* SECOND arrow up +1 (MINUTES) */


function foo3() {
if (num2Out <= 58) {
	num2Out +=1
	num2In.textContent = num2Out
    }
else if (num2Out == 59) {
	num2Out = 0 
	}
    console.log(num2Out)
    num2In.textContent = String(num2Out).padStart(2,'0') /*shows counter +"0" ... 01,02,03,04,05,06,07,08,09,10,11*/
    return num2Out;
}

arrowUp2.onclick = foo3





let arrowDown2 = document.querySelector( '.arrowdown2' ) /* SECOND arrow down -1 (SECONDS) */


function foo4() {
if (num2Out >= 1) {
	num2Out -=1
	}
else if(num2Out == 0) {
	num2Out = 59
	}
	console.log(num2Out)
	num2In.textContent = String(num2Out).padStart(2,'0') /*shows counter +"0" ... 01,02,03,04,05,06,07,08,09,10,11*/
	return num2Out;
}

arrowDown2.onclick = foo4

num2Out = foo3()
num2Out = foo4()










let num3In = document.querySelector( '.number3' )  /*get value of SECONDS */

let num3Out = 0

num3Out = parseInt(num3In.textContent)

console.log(num3Out)




let arrowUp3 = document.querySelector( '.arrowup3' ) /* THIRD arrow up +1 (SECONDS) */

function foo5() {
if (num3Out <= 58) {
	num3Out +=1
	num3In.textContent = num3Out
	}
else if (num3Out == 59) {
	num3Out = 0 
    }
    console.log(num3Out)
    num3In.textContent = String(num3Out).padStart(2,'0') /*shows counter +"0" ... 01,02,03,04,05,06,07,08,09,10,11*/
    return num3Out;
}

arrowUp3.onclick = foo5




let arrowDown3 = document.querySelector( '.arrowdown3' ) /* THIRD arrow down -1 (SECONDS) */


function foo6() {
if (num3Out >= 1) {
		num3Out -=1
		
	}
else if(num3Out == 0) {
		num3Out = 59
		
	}
	console.log(num3Out)
	num3In.textContent = String(num3Out).padStart(2,'0') /*shows counter +"0" ... 01,02,03,04,05,06,07,08,09,10,11*/
	return num3Out;
}

arrowDown3.onclick = foo6

num3Out = foo5()
num3Out = foo6()



let getSeconds = () => {return num1Out*3600 + num2Out*60 + num3Out}
console.log(getSeconds())






















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









