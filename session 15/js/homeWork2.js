function checkEmpty() {
	var name = document.getElementById('displayName').value;
	var day = document.getElementById('date').value;
	var gender = document.getElementById('displayGender').value;
	var phone = document.getElementById('displayNumber').value;
	var month = document.getElementById('month').value;
	var year = document.getElementById('year').value;
	if (name == '') {
		document.getElementById('errorName').innerHTML = "please enter name";
	} else {
		document.getElementById('errorName').innerHTML ='';
	}
	if (phone == '') {
		document.getElementById('errorPhone').innerHTML = 'please enter phone number';

	} else {
		document.getElementById('errorPhone').innerHTML ='';
	}
	if(day == ''){
		document.getElementById('errorDate').innerHTML = 'please enter day.';
	}
	else {
		document.getElementById('errorDate').innerHTML ='';
	}
	if(month == ''){
		document.getElementById('errorMonth').innerHTML = 'please enter month';
	}
	else {
		document.getElementById('errorMonth').innerHTML ='';
	}
	if(year == ''){
		document.getElementById('errorYear').innerHTML = 'please enter year';
	}
	else {
		document.getElementById('errorYear').innerHTML ='';
	}
	if (phone != '' && name != ''&& day != '' && month != '' && year !=''){
		document.getElementById('rate').innerHTML = 'Sucessfully';
	}
	if (parseInt(year) > 1998){
	document.getElementById('display1').innerHTML = "Name: "+ name;
	document.getElementById('display1').style.color = 'red';
	document.getElementById('display2').innerHTML = "Gender: "+ gender + " " +"Phone: "+phone +"  "+"date of birth: "+ day +"/"+ month +"/"+year+".";
	} else {
	document.getElementById('display1').innerHTML = name ;
	document.getElementById('display1').style.color = 'green';
	document.getElementById('display2').innerHTML = gender + " " + phone + day +"/"+ month +"/"+year+".";
 }
}
