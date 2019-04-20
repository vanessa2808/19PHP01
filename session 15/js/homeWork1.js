var myImage = [];
var time = 3000;
var i  = 0;

myImage[0] = 'slider1.jpg';
myImage[1] = 'slider2.jpg';
myImage[3] = 'slider3.jpg';
myImage[4] = 'slider4.jpg';

function changeImage() {
	for (var i = 0; i < myImage.length; i++) {
		document.write(myImage[i]);
	}
}