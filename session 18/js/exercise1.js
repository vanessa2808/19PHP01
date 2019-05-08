$(document).ready(function(){
		$('#form').validate({
            rules: {
                name: {
                    required: true
                },
                address: {
                    required: true
                },
                phone: {
                    required: true
                },
                first: {
                    required: true
                },
                Last: {
                    required: true
                },
                number1: {
                    required: true,
                   	min: true
                },
                number2: {
                    required: true,
                    min: true
                },
            },
            messages: {
                name: {
                    required: "Vui lòng nhập họ tên"
                },
                address: {
                    required: "Vui lòng nhập địa chỉ"
                },
                phone: {
                    required: "Vui lòng nhập số điện thoại"
                },
                first: {
                    required: "Vui lòng nhập ngày đầu kì"
                },
                Last: {
                    required: "Vui lòng nhập ngày cuối kì"
                },
                number1: {
                    required: "Vui lòng nhập số đầu kì",
                    min: "vui lòng nhập số lớn hơn 0"
                    
                },
                number2: {
                    required: "Vui lòng nhập số cuối kì",
                    min: "vui lòng nhập số lớn hơn 0"
                }
            }
        
    });
		$('#last').on('change', function(){
			var firstDay= $('#first').val();
			var lastDay= $('#last').val();
			if(lastDay <= firstDay){
				alert('Ngày cuối kì phải lớn hơn ngày đầu kì');
				$('#last').val("");
			}
			$('#first').on('change', function(){
			var firstDay= $('#first').val();
			var lastDay= $('#last').val();

			
			if(lastDay <= firstDay){
				alert('Ngày đầu kì phải nhỏ hơn ngày cuối kì');
				$('#first').val("");
			
		}
		});
		});

		