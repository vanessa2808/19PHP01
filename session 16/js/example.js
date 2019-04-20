// setInterval
// setTimeOut-- Chay tu dong
$('.demo1_click').click(function(){
	$('#demo1').html('Hello Jquery');
});
$('.demo2_click').click(function(){
	//$('#demo2').css.('color','red');
	$('#demo2').css({'color': 'red','font-size':'30px','background-color':'yellow'});
});
$('.demo3_click').click(function(){
	$('#demo3').attr('src','../image/slider2.jpg');
});
$('.show').click(function(){
	$('#demo4').show("fast");
});
$('.hide').click(function(){
	$('#demo4').hide();
});
