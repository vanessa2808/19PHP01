// var myArray = [];
// console.log(typeof myArray);
// var myArray2 = ['vanessa','iris','lucy'];
// console.log(myArray2);
// // access each object
// console.log(myArray2[0])
// console.log(myArray2.length);
// for(var i = 0; i < myArray2.length ; i++){
// 	document.write(myArray2[i]);
// }
document.write("<br/>")
var myArray3 = [5,4,9,12,78,4,6,2];
// myArray3.sort();
// for(var i =0; i<myArray3.length; i++){
// 	document.write(myArray3[i]+ " ");
// }
for( var i = 0;i< myArray3.length -1; i++){
	for(var j = i+1; j<myArray3.length; j++ ){
		if(myArray3[i] > myArray3[j]){
			var temporary = myArray3[i];
			myArray3[i] = myArray3[j];
			myArray3[j] = temporary;
		}
	}
}
for(var i = 0; i < myArray3.length; i++){
		document.write(myArray3[i] + "   " );
}