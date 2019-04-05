// for while loop
for (var i = 0; i <= 9; i++){
	document.write(i + "<br/>");
}
document.write('----------<br>');
var x =5;
var y=5;
x++;
y--;
 document.write(x);
 document.write('<br/>');
 document.write(y);
 document.write('----------<br>');
 var a =5;
 var b =7;
 var c;
 //c = a++ + b++;
 d = ++a + ++b;
 document.write('<br/>');
 document.write(c);
 document.write('<br/>');
 document.write(d + "<br/>");
 document.write('--------------------<br/>');
 var i =5;
 while(i < 10) {
 	document.write(i);
 	document.write('<br/>');
 	i++;
 }
 document.write('-----------------<br>');
 do{
 	document.write(i);
 	document.write('<br/>');
 	i++;
 }while (i<10);
 // cho day so tu 2-15
 // kiem tra so do co phai l ngay trong tuan khong
 // neu co thi in ra: hom nay la thu x
 // neu khong thi in ra so nay khong thuoc ngay trong tuan
 document.write('<br/>');
 for ( var i = 2; i < 15; i++){
 	if( i <= 8 ){
 		if(i == 8){
 			document.write('hom ni la chu nhat' + "<br/>");
 		}
 		else{
 		document.write(i + ' la thu trong tuan');
 		document.write('<br/>');
 	}
 }
 	else {
 		document.write('khong co thu ' + i);
 		document.write('<br/>');
 	}
 }
 document.write('<br/>');
 // Method
 function myFunction() {
 	var a = 5, b =6;
 	document.write(a + b);
 }
 document.write('<br/>');
 myFunction();
 document.write('<br/>');
 function sub(x, y) {
 	document.write(x + y);
 }
 document.write('<br/>');
 sub(6 , 8);
 document.write('<br/>');
 sub(9 , 6);
 document.write('<br/>');
 // cho mot day so tu 0 den 10
 // voi n la so nam kinh nghiem
 // tinh luong thuc nhan voi lcb  2 300 000
 // so nam kinh nghiem < 3 thi hsl 2
 // so nam kinh nghiem < 5 he so luong la 3
 // > 5 hsl 5
 // ex: luong thuc = luong co ban * het sp luong
 document.write('<br/>');
 function salaryForEmployee(){
 	var basicSalary = 2300000;
 	for(var i = 0; i <= 10; i++){
 		if(i < 3) document.write(basicSalary * 2 + "<br/>");
 		else 
 			if (i >= 3 && i < 5) document.write(basicSalary*3 + "<br/>");
 			else 
 				if(i==5) document.write(basicSalary*4 +"<br/>");
 				else document.write(basicSalary * 5 + "<br/");
 	}
 }
 salaryForEmployee();