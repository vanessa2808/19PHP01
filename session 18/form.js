		function formatNumber(nStr, decSeperate, groupSeperate) {
            nStr += '';
            x = nStr.split(decSeperate);
            x1 = x[0];
            x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + groupSeperate + '$2');
            }
            return x1 + x2;
        }
	$(document).ready(function(){
		$('#form').validate({
            rules: {
                hoten: {
                    required: true
                },
                diachi: {
                    required: true
                },
                sdt: {
                    required: true
                },
                hoten: {
                    required: true
                },
                ngaydauki: {
                    required: true
                },
                ngaycuoiki: {
                    required: true
                },
                sodauki: {
                    required: true,
                   	min: true
                },
                socuoiki: {
                    required: true,
                    min: true
                },
            },
            messages: {
                hoten: {
                    required: "Vui lòng nhập họ tên"
                },
                diachi: {
                    required: "Vui lòng nhập địa chỉ"
                },
                sdt: {
                    required: "Vui lòng nhập số điện thoại"
                },
                ngaydauki: {
                    required: "Vui lòng nhập ngày đầu kì"
                },
                ngaycuoiki: {
                    required: "Vui lòng nhập ngày cuối kì"
                },
                sodauki: {
                    required: "Vui lòng nhập số đầu kì",
                    min: "vui lòng nhập số lớn hơn 0"
                    
                },
                socuoiki: {
                    required: "Vui lòng nhập số cuối kì",
                    min: "vui lòng nhập số lớn hơn 0"
                }
            }
        
    });
		$('#ldate').on('change', function(){
			var fd= $('#fdate').val();
			var ld= $('#ldate').val();
			if(ld <= fd){
				alert('Ngày cuối kì phải lớn hơn ngày đầu kì');
				$('#ldate').val("");
			}
			$('#fdate').on('change', function(){
			var fd= $('#fdate').val();
			var ld= $('#ldate').val();

			
			if(ld <= fd){
				alert('Ngày đầu kì phải nhỏ hơn ngày cuối kì');
				$('#fdate').val("");
			
		}
		});
		});
		$('#lnum').on('change', function(){
			var fn= document.getElementById('fnum').value;
			var ln= document.getElementById('lnum').value;
			if(ln - fn < 0){
				alert('Số cuối kì phải lớn hơn số đầu kì');
				$('#lnum').val("");
			}
			$('#fnum').on('change', function(){
			var fn= $('#fnum').val();
			var ln= $('#lnum').val();
			if(ln - fn<0){
				alert('Số đầu kì phải nhỏ hơn số cuối kì');
				$('#fnum').val("");
			}
			
			});	
		});

		$('.btn-submit').click( function(){
			$('#hoadon').css('display','block');
			document.getElementById('hd-name').innerHTML=$('#name').val();
			document.getElementById('hd-addr').innerHTML=$('#address').val();
			document.getElementById('hd-tel').innerHTML=$('#tel').val();
			document.getElementById('hd-fdate').innerHTML=$('#fdate').val();
			document.getElementById('hd-ldate').innerHTML=$('#ldate').val();
			document.getElementById('hd-fnum').innerHTML=$('#fnum').val();
			document.getElementById('hd-lnum').innerHTML=$('#lnum').val();
			document.getElementById('hd-note').innerHTML=$('#note').val();
			$('form').submit();
			var fn=$('#fnum').val();
			var ln=$('#lnum').val();
			var t= ln-fn;
			var a=1500;
			var b=2000;
			var c= 3000;
			var total;
			var tien;
			if(t<100){
				total= t*a;
				tien=formatNumber(total,'.',',');
				document.getElementById('hd-total').innerHTML=tien +' VND';
			}
			else{
				if(t>300){
				total= 100*a + 200*b + (t-300)*c;
				tien=formatNumber(total,'.',',');
				document.getElementById('hd-total').innerHTML=tien+' VND';
				}
				else{
				total= 100*a + (t-100)*b;
				tien=formatNumber(total,'.',',');
				document.getElementById('hd-total').innerHTML=tien+' VND';
				}
			}



		});
	
});
