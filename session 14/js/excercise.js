function checkRegister() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var pass = document.getElementById('password').value;
	var checkRegister = true;
	if(name == ''){
		document.getElementById('errorName').innerHTML = 'please, enter name again';
		checkRegister = false;
	} else {
		document.getElementById('errorName').innerHTML = '';
	}
	if(email == ''){
		document.getElementById('errorEmail').innerHTML = 'please,enter email again!';	
		checkRegister = false;
	} else {
		document.getElementById('errorEmail').innerHTML = '';
	}
	if(pass == ''){
		document.getElementById('errorPass').innerHTML = "please,enter password again!";
		checkRegister = false;
	} else {
		document.getElementById('errorPass').innerHTML = "";
	}
	if(checkRegister == true){
		document.getElementById('success').innerHTML ="successfully!"
	}
}