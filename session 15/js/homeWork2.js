function checkEmpty() {
	var name = document.getElementById('displayName').value;
	var day = document.getElementById('date').value;
	var gender = document.getElementById('displayGender').value;
	var phone = document.getElementById('displayNumber').value;
	var month = document.getElementById('month').value;
	var year = document.getElementById('year').value;
	if (name == '') {
		document.getElementById('errorName').innerHTML = "please enter name";
		document.getElementById('errorName').style.fontSize = "12px";
	} else {
		document.getElementById('errorName').innerHTML ='';
	}
	if (phone == '') {
		document.getElementById('errorPhone').innerHTML = 'please enter phone number';
		document.getElementById('errorPhone').style.fontSize = "12px";

	} else {
		document.getElementById('errorPhone').innerHTML ='';
	}
	if(day == ''){
		document.getElementById('errorDate').innerHTML = 'please enter day.';
		document.getElementById('errorDate').style.fontSize = "12px";
	}
	else {
		if (day <= 0 || day > 31){
			document.getElementById('negativeDate').innerHTML ='[error:]Invalid number';
			return '';
		} else {
			document.getElementById('errorYear').innerHTML ='';
		}
	}
	if(month == ''){
		document.getElementById('errorMonth').innerHTML = 'please enter month';
		document.getElementById('errorMonth').style.fontSize = "12px";
	}
	else {
		if (month <= 0 || month > 12){
			document.getElementById('negativeDate').innerHTML ='[error:]Invalid number';
			document.getElementById('negativeDate').style.fontSize = "12px";
			return '';
		} else {
			document.getElementById('errorMonth').innerHTML ='';
		}
	}
	if(year == ''){
		document.getElementById('errorYear').innerHTML = 'please enter year';
		document.getElementById('errorYear').style.fontSize = "12px";
	}
	else {
		document.getElementById('errorYear').innerHTML ='';
		if (year <= 0){
			document.getElementById('negativeDate').innerHTML ='[error:]Invalid number';
			document.getElementById('negativeDate').style.fontSize = "12px";
			return '';
		} else {
			document.getElementById('errorYear').innerHTML ='';
		}
	}
	if (phone != '' && name != ''&& day != '' && month != '' && year !=''){
		document.getElementById('rate').innerHTML = 'Sucessfully';
		if (parseInt(year) > 1998){
			document.getElementById('display1').innerHTML = "Name: "+name;
			document.getElementById('display1').style.color = 'red';
			document.getElementById('display2').innerHTML = "Gender: "+ gender;
			document.getElementById('display3').innerHTML = "date Of Birth: "+ day + "/" +month + "/"+ year; 
			document.getElementById('display4').innerHTML = "Phone: "+ phone;
		} else {
			document.getElementById('display1').innerHTML = "Name: "+name;
			document.getElementById('display1').style.color = 'green';
			document.getElementById('display2').innerHTML = "Gender: "+ gender;
			document.getElementById('display3').innerHTML = "date Of Birth: "+ day + "/" +month + "/"+ year; 
			document.getElementById('display4').innerHTML = "Phone: "+ phone;
 		}
	}
}
