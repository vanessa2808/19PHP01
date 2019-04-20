var myImage =[];
var i  = 0;
myImage[0] = '../image/slider1.jpg';
myImage[1] = '../image/slider2.jpg';
myImage[2] = '../image/slider5.jpg';
myImage[3] = '../image/slider3.jpg';
myImage[4] = '../image/slider4.jpg';
myImage[5] = '../image/yen.jpg';
myImage[6] = '../image/yen1.jpg';
function changeImage() {
	document.slide.src = myImage[i];
	if(i < myImage.length -1){
		i++;
	} else {
		i = 0;
	}
}
changeImage();