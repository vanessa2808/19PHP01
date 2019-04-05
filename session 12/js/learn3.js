function sumNumber() {
	var number1, number2;
	number1 = document.getElementById('Number1').value;
	number2 = document.getElementById('Number2').value;
	if (number1 == '' || number2 =='') document.getElementById('result').innerHTML = 'please enter again';
	else
		document.getElementById('result').innerHTML = parseInt(number1) + parseInt(number2);
}
function subNumber(){
	var number1, number2;
	number1 = document.getElementById('Number1').value;
	number2 = document.getElementById('Number2').value;
	if (number1 == '' || number2 =='') document.getElementById('result1').innerHTML = 'please enter again';
	else document.getElementById('result1').innerHTML = parseInt(number1) - parseInt(number2);
}
function mulNumber() {
	var number1, number2;
	number1 = document.getElementById('Number1').value;
	number2 = document.getElementById('Number2').value;
	if (number1 == '' || number2 =='') document.getElementById('result2').innerHTML = 'please enter again';
	else document.getElementById('result2').innerHTML = parseInt(number1) * parseInt(number2);
}
function divNumber() {
	var number1, number2;
	number1 = document.getElementById('Number1').value;
	number2 = document.getElementById('Number2').value;
	if (number1 == '' || number2 =='') document.getElementById('result3').innerHTML = 'please enter again';
	else document.getElementById('result3').innerHTML = parseInt(number1) / parseInt(number2);
}

// function calculator(){
// 	var number1, number2;
// 	number1 = document.getElementById('Number1').value;
// 	number2 = document.getElementById('Number2').value;
// 	document.getElementById('result').innerHTML = parseInt(number1) + parseInt(number2);
// 	document.getElementById('result1').innerHTML = parseInt(number1) - parseInt(number2);
// 	document.getElementById('result2').innerHTML = parseInt(number1) * parseInt(number2);
// 	document.getElementById('result3').innerHTML = parseInt(number1) / parseInt(number2);
// }