function checkMyName() {
	var name = document.getElementById('name').value;
	if(name == ''){
		document.getElementById('errorName').innerHTML = 'please enter number again';
	} else {
		document.getElementById('errorName').innerHTML ='';
		 var spaceFirstName = name.indexOf(' ');
		 var spaceLastName = name.lastIndexOf(' ');
		 var firstName = name.substring(0, spaceFirstName);
		 var middleName = name.substring(spaceFirstName,spaceLastName);
		 var lastName = name.substring(spaceLastName, name.length);
		 document.getElementById('ex1').innerHTML = 'first name: '+ firstName +'<br/> middle name: ' + middleName +'<br/> last Name' + lastName;
		 var checkMyName = name.indexOf('n');
		if(checkMyName != -1){
			document.getElementById('ex2').innerHTML = " having n characters " ;
		}
		else{
			document.getElementById('ex2').innerHTML = "  no have n characters ";
		}
		 var upperName = name.toUpperCase(name);
		 document.getElementById('ex3').innerHTML = "name "+ upperName ;
		var replaceName = name.replace('thi hong',' Vanessa');
		 document.getElementById('ex4').innerHTML = "replace name: "+ replaceName ;
		 document.getElementById('ex5').innerHTML = firstName + middleName + lastName.toUpperCase();
	}
	//  cau 2:
// cach 1: count the charater
// no different between uppercase and lowercase
 var newName = name.toLowerCase();
 var countN = 0;
 for(var i = 0; i < newName.length; i++){
 	if(newName[i]=='n'){
 		countN++;
 	}
 	document.getElementById('ex2').innerHTML = "having " + countN + "in the text";
 }
 // cach 2
 var count2 = 0;
 while(newName.indexOf('n') != -1){
 	count2++;
 	newName = newName.substring(newName.indexOf('n') + 1, newName.length);
 }
 document.getElementById('ex2').innerHTML = "having " + count2 + "in the text";
}
