var myImage = ['slider1.jpg'];
var time = 3000;
var i  = 0;

myImage[0] = 'slider1.jpg';
myImage[1] = 'slider2.jpg';
myImage[3] = 'slider3.jpg';
myImage[4] = 'slider4.jpg';

function changeImage() {
	document.slide.src = myImage[i];
	if(i < myImage.length -1){
		i++
	} else {
		i = 0;
	}
	setTimeout("changeImage()",time);
}
window.onload = changeImage;