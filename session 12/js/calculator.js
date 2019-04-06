function factorial(value) {
	var s=1;
	for(i = 1; i <= value; i++){
		s = s * i;
	}
	document.getElementById('result').innerHTML=parseInt(s);
}