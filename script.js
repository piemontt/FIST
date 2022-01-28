let num1 = document.querySelector( '.number1' )

num1 = parseInt(num1.textContent)

console.log(num1)


let button1 = document.getElementById( 'buttonSetTimer' )

button1.onclick = function() {
	alert('PRESSED button 1')
	num1 +=1

	console.log(num1)
	document.querySelector( '.number1' ).textContent = num1
}


