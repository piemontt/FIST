


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
