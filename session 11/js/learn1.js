var a;
/*
Qui rac dat ten bien:
- co y nghia
-Bang chu cai hoa hoac thuong, si va dau gach dduoi
- khong bat dau bang so
- nen dar bang tieng anh
- theo qui tac camel
Ex: userName,myAge,getMyInfo,getElementById
*/
//bt: dat ten user email sodt ngay sinh

var userName;
var email
var phoneNumber
var dateOfBirth
// + - * /
var x=6,y=8;
document.write('tong 2 so la =');
document.write(x+y);
document.write('<br/>');
document.write('hieu 2 so la =');
document.write(x-y);
document.write('<br/>');
document.write('thuong 2 so la =');
document.write(y/x);
document.write('<br/>');
document.write('tich 2 so la =');
document.write(x*y);
// cac phep so sanh trong js > ,< ,>= ,<= , !=
//cau dieu kien trong js
/*
	if(dieukien){
		thuc hien dieu kien dung
	}
*/
var x = 9, y =9;
if (x > y){
	document.write('<br/>');
	document.write('true');
}
else if(x == y) {
	document.write('<br/>');
	 document.write('=');
}
else {
	document.write('<br/>');
	document.write('false');
}
// cau lenh switch case
 var x = 5;
 document.write('<br/>');
 switch (x) {
 	case 1:
 		document.write('1');
 		break;
 	case 2:
 		document.write('2');
 		break;
 	case 3:
 		document.write('3');
 		break;
 	case 4:
 		document.write('4');
 		break;
 	case 5:
 		document.write('5');
 		break;
 	case 6:
 		document.write('6');
 		break;
 	case 7:
 		document.write('7');
 		break;
 	case 8:
 		document.write('8');
 		break;
 	default:
 		document.write('no');
 		break;
 }
 document.write('<br/>');
 // cho truoc 1 so kiem tra so do co phai la thang torng nam ko// neu phair so ngay
 // cho biet so ngay trong 1 tha0ng 
 document.write('<br/>');
 var month = 6;
 var year = 2000;
 switch(month){
 	case 1: 
 	case 3:
 	case 5:
 	case 7:
 	case 8:
 	case 10:
 	case 12:
 		document.write(month+ ' co trong nam');
 		document.write('31 days');
 		break;
 	case 2:
 		if(year % 4 == 0 && year % 100 !=0) document.write('29 days <br/>');
 		else document.write('thang nay co 28 ');
 		break;
 	case 4:
 	case 6: 
 	case 9:
 	case 11:
 		document.write(month+' co trong nam');
 		document.write('30 days');
 		break;
 	default:
 		document.write('khong co thang nay');
 }
/*
	
*/
