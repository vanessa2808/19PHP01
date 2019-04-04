function processNumber(number) {
	var j;
	var html = '';
	for(j = 1 ;j <= 10 ;j++){
		html += number + 'x' + j + '=' + j*number+ "<br/>";
	}
	document.getElementById('gender' + number).innerHTML = html;
}