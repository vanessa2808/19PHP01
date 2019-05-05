 function format_currency(a) {
 	a = a.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
 	return a;
 }
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
                firstNumber: {
                    required: true,
                   	min: true
                },
                lastNumber: {
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
                firstNumber: {
                    required: "Vui lòng nhập số đầu kì",
                    min: "vui lòng nhập số lớn hơn 0"
                    
                },
                lastNumber: {
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
		$('#number1').on('change', function(){
			var firstNumber= document.getElementById('number1').value;
			var lastNumber= document.getElementById('number2').value;
			if(lastNumber - firstNumber < 0){
				alert('Số cuối kì phải lớn hơn số đầu kì');
				$('#number2').val("");
			}
			$('#number1').on('change', function(){
			var firstNumber= $('#number1').val();
			var lastNumber= $('#number2').val();
			if(lastNumber - firstNumber<0){
				alert('Số đầu kì phải nhỏ hơn số cuối kì');
				$('#number2').val("");
			}
			
			});	
		});

		$('.press').click( function(){
			$('#display').css('display','block');
			document.getElementById('name').innerHTML=$('#name').val();
			document.getElementById('address').innerHTML=$('#address').val();
			document.getElementById('phone').innerHTML=$('#tel').val();
			document.getElementById('first').innerHTML=$('#fdate').val();
			document.getElementById('last').innerHTML=$('#ldate').val();
			document.getElementById('firstNumber').innerHTML=$('#fnum').val();
			document.getElementById('lastNumber').innerHTML=$('#lnum').val();
			document.getElementById('note').innerHTML=$('#note').val();
			$('form').submit();
			var fn=$('#first').val();
			var ln=$('#last').val();
			var t= lastNumber - firstNumber;
			var a=1500;
			var b=2000;
			var c= 3000;
			var total;
			var tien;
			if(t<100){
				total= t*a;
				tien=formatNumber(total);
				document.getElementById('display9').innerHTML=tien +' VND';
			}
			else{
				if(t>300){
				total= 100*a + 200*b + (t-300)*c;
				tien=formatNumber(total);
				document.getElementById('display9').innerHTML=tien+' VND';
				}
				else{
				total= 100*a + (t-100)*b;
				tien=formatNumber(total);
				document.getElementById('display9').innerHTML=tien+' VND';
				}
			}



		});
	
});
