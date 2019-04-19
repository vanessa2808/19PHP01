function checkEmpty() {
	var name = document.getElementById('displayName').value;
	var dateOfBirth = document.getElementById('displayDate').value;
	var gender = document.getElementById('displayGender').value;
	var phone = document.getElementById('displayNumber').value;
	if (name == ''){
		document.getElementById('displayName').innerHTML = "please enter name";
	} else {
		document.getElementById('displayName').innerHTML ='';
	}
	if (phone == ''){
		document.getElementById('displayNumber').innerHTML = 'please enter phone number';

	} else {
		document.getElementById('displayNumber').innerHTML ='';
	}
}