var myText1 = 'qualified health claim: ';
var mytext2 = "qualified health claim:";
var a =5 ;
console.log(typeof myText1);
console.log(typeof a);
console.log(typeof mytext2);

// check the lenght of string
document.write("<br/>");
var myTextLenght1 = myText1.length;
document.write('the lenght is '+myTextLenght1 + " characters <br/>");

var myTextLenght2 = mytext2.length;
document.write("my text2 is " + myTextLenght2 + "charactars <br/>");
 // check the character in tring k
 var aCharInMyText1 = myText1.indexOf('ajksdh');
 console.log(aCharInMyText1);

 var aCharLastInMyText1 = myText1.lastIndexOf('a');
 console.log(aCharLastInMyText1);

 //replace a character or string in string
 var replaceCity = myText1.replace('health', 'body');
 console.log(replaceCity);
 document.write(replaceCity);

 // cut the charater in string
 var cutStringMyText1 = myText1.substring(4,7);
 document.write('<br/>'+cutStringMyText1);

 // cutting follow the length
 var cutStringLengthMyText1 = myText1.substr(4,6);
 document.write("<br/>");
 document.write(cutStringLengthMyText1);

 // write uppercase and lowercase
 var uppercaseText1 = myText1.toUpperCase();
 document.write('<br/>');
 document.write(uppercaseText1);

 // dat mot bien la ten day du cua minh dc truyen vao tu ham
 // vi du:
  // tach ho, ten dem, ten cua nguoi dos ra
  // luong hoai canh
  // kiem tra trong ten cos chua chu n khong
  // dem vi tri xuat hien chua n?
  // viet hoa ten nguoi do va in ra
  // thay the ten dem cua nguowi do thanh 19PHP-1;
  // ex: luong 19PHP01 canh
   document.write("<br/>");
  function myName(name) {
  	document.write("My full name is: "+name);
  	var cutName1 = name.substr(0,6);
  	document.write("<br/>first name: " +cutName1);
  	var cutName2 = name.substr(7,8);
  	document.write("<br/>middle name: " +cutName2);
  	var cutName3 = name.substr(16,17);
  	document.write("<br/>last name: " +cutName3);
  	var checkCharacter = name.indexOf('e'); 
  	document.write("<br/>"+ "having the character n in the text" + " " +checkCharacter );
  	var upperName = name.toUpperCase(name);
  	document.write("<br/>" +' upper name: '+ upperName);
  	var replaceName = name.replace('thi hong',' Vanessa');
  	document.write("<br/>"+ "after replacing: "+replaceName);
  }
  myName('nguyen thi hong yen');

