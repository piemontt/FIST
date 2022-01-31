


let num1In = document.querySelector( '.number1' )  /*get value of HOURS*/

num1Out = parseInt(num1In.textContent)

console.log(num1Out)



let arrowUp1 = document.querySelector( '.arrowup1' ) /* First arrow up +1 (HOURS) */

arrowUp1.onclick = function() {
	
	num1Out +=1
	console.log(num1Out)
	num1In.textContent = num1Out

}



let arrowDown1 = document.querySelector( '.arrowdown1' ) /* First arrow down -1 (HOURS) */

arrowDown1.onclick = function() {
	
	num1Out -=1
	console.log(num1Out)
	num1In.textContent = num1Out

}









let num2In = document.querySelector( '.number2' )  /*get value of MINUTES*/

num2Out = parseInt(num2In.textContent)

console.log(num2Out)



let arrowUp2 = document.querySelector( '.arrowup2' ) /* SECOND arrow up +1 (MINUTES) */

arrowUp2.onclick = function() {
	
	num2Out +=1
	console.log(num2Out)
	num2In.textContent = num2Out

}



let arrowDown2 = document.querySelector( '.arrowdown2' ) /* SECOND arrow down -1 (MINUTES) */

arrowDown2.onclick = function() {
	
	num2Out -=1
	console.log(num2Out)
	num2In.textContent = num2Out

}









let num3In = document.querySelector( '.number3' )  /*get value of SECONDS */

num3Out = parseInt(num3In.textContent)

console.log(num3Out)



let arrowUp3 = document.querySelector( '.arrowup3' ) /* THIRD arrow up +1 (SECONDS) */

arrowUp3.onclick = function() {
	if (num3Out <= 58) {
	num3Out +=1
	console.log(num3Out)
	num3In.textContent = num3Out
}
else if (num3Out == 59) {
		num3Out = 0
		console.log(num3Out)
	num3In.textContent = num3Out
}
}




let arrowDown3 = document.querySelector( '.arrowdown3' ) /* THIRD arrow down -1 (SECONDS) */

arrowDown3.onclick = function() {
	if (num3Out >= 1) {
		num3Out -=1
	console.log(num3Out)
	num3In.textContent = num3Out  }
}

