$('.runMyBox').click(function(){
	$('#myBox').animate({'font-size':'20px'});
	$('#myBox').animate({'left':'100px'});
	$('#myBox').animate({'top':'300px'});
	$('#myBox').animate({'color':'blue'});
	$('#myBox').animate({'height':'300px'});
	$('#myBox').animate({'width':'300px'});
});
$('.showHide').click(function(){
	$('#myBox').hide(400).css('color','red').show(5000);

});
$('.runImage').click(function(){
	$('#myBox1').animate({'right':'100px'});
	$('#myBox1').animate({'left':'600px'});
	$('#myBox1').animate({'top':'300px'});
	$('#myBox1').animate({'right':'50px'});
	$('#myBox1').animate({'left':'10px'});
	$('#myBox1').animate({'top':'400px'});
});
$('.runImage').click(function(){
	$('#myBox1').animate({'left':'600px'});
	$('#myBox1').animate({'top':'300px'});
	$('#myBox1').animate({'right':'50px'});
	$('#myBox1').animate({'left':'10px'});
	$('#myBox1').animate({'top':'400px'});
	$('#myBox2').animate({'top':'360px'});
	$('#myBox2').animate({'left':'800px'});
	$('#myBox2').animate({'right':'50px'});
	$('#myBox2').animate({'left':'110px'});
	$('#myBox2').animate({'top':'200px'});
});
$(document).ready(function(){
  $("button").click(function(){
    $('#div1').delay('1300').fadeIn();
 
  });
});
// $('.runImage').click(function(){
// 	$('#myBox1').animate({'right':'200px'});
// 	$('#myBox1').animate({'left':'600px'});
// 	$('#myBox1').animate({'right':'50px'});
// 	$('#myBox1').animate({'top':'400px'});

// 	$('#myBox2').animate({'top':'600px'});
// 	$('#myBox2').animate({'right':'100px'});
// 	$('#myBox2').animate({'left':'10px'});

// 	$('#myBox3').animate({'top':'900px'});
// 	$('#myBox3').animate({'right':'100px'});
// 	$('#myBox3').animate({'left':'600px'});

// 	$('#myBox4').animate({'right':'900px'});
// 	$('#myBox4').animate({'top':'300px'});
// 	$('#myBox4').animate({'left':'600px'});

// 	$('#myBox5').animate({'right':'200px'});
// 	$('#myBox5').animate({'left':'600px'});
// 	$('#myBox5').animate({'left':'10px'});


// 	$('#myBox6').animate({'right':'200px'});
// 	$('#myBox6').animate({'left':'600px'});
// 	$('#myBox6').animate({'top':'400px'});

// });