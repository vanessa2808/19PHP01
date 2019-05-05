function checkForm() {
	var name = $("#name").val();
	var address = $("#address").val();
	var phone = $("#phone").val();
	var firstDay = $("#first").val();
	var lastDay = $("#last").val();
	var firstNumber = $("#number1").val();
	var lastNumber = $("#number2").val();
	var check = true;
	if (name == '') {
			$('#errorName').html('Please enter name!')
	}
}