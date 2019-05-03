function checkForm() {
	var name = document.getElementById('name').value;
	var address = document.getElementById('address').value;
	var phone = document.getElementById('phone').value;
	var first = document.getElementById('first').value;
	var last = document.getElementById('last').value;
	var firstNumber = document.getElementById('number1').value;
	var lastNumber = document.getElementById('number2').value;
	if (name == '') {
		document.getElementById('errorName').innerHTML = "please enter name";
		document.getElementById('errorName').style.color = "red";
	} else {
		document.getElementById('errorName').innerHTML ='';
	}
	if (address == '') {
		document.getElementById('errorAddress').innerHTML = "please enter address";
		document.getElementById('errorAddress').style.color = "red";
	} else {
		document.getElementById('errorAddress').innerHTML ='';
	}
	if (phone == '') {
		document.getElementById('errorPhone').innerHTML = "please enter phone";
		document.getElementById('errorPhone').style.color = "red";
	} else {
		document.getElementById('errorPhone').innerHTML ='';
	}
	if (first == '') {
		document.getElementById('errorFirst').innerHTML = "please enter first day ";
		document.getElementById('errorFirst').style.color = "red";
	} else {
		document.getElementById('errorFirst').innerHTML ='';
	}
	if (last == '') {
		document.getElementById('errorLast').innerHTML = "please enter last day";
		document.getElementById('errorLast').style.color = "red";
	} else {
		document.getElementById('errorLast').innerHTML ='';
	}
	if (firstNumber == '') {
		document.getElementById('errorNumber1').innerHTML = "please enter first Number";
		document.getElementById('errorNumber1').style.color = "red";
	} else {
		document.getElementById('errorNumber1').innerHTML ='';
	}
	if (lastNumber == '') {
		document.getElementById('errorNumber2').innerHTML = "please enter last Number";
		document.getElementById('errorNumber2').style.color = "red";
	} else {
		document.getElementById('errorNumber2').innerHTML ='';
	}
	if(name != '' && phone != '' && address != '' && last!='' && first!= '' && firstNumber!='' && lastNumber != ''){
		//document.getElementById('display1').innerHTML = 'sucessfully'
		alert('sucessfully!');
	}
	if(lastNumber < firstNumber){
			document.getElementById('errorNumber2').innerHTML = "please enter invalid last Number";
			document.getElementById('errorNumber2').style.color = "red";
	}
	// document.write("<br/>");
	// document.getElementById('display') = name;
	// document.getElementById('display') = address;
	// document.getElementById('display') = phone;
	// document.getElementById('display') = first;
	// document.getElementById('display') = last;
	// document.getElementById('display') = firstNumber;
	// document.getElementById('display') = lastNumber;
	var sum = (lastNumber) - (firstNumber);
	if(sum <= 100) {
		sum = sum * 1500;
		document.getElementById('display').innerHTML ="The cost of electricity: " + sum;
	}
	else if(sum < 100 && sum < 300){
		sum = 100*1500 + (sum - 100)*2000;
		document.getElementById('display').innerHTML ="The cost of electricity: " + sum;
	} else{
	 	 sum = 100*1500 + 200*2000 +(sum-300)*3000;
		document.getElementById('display').innerHTML ="The cost of electricity: " + sum;
	}
}

