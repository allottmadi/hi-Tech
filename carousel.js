
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch

// Image List
images[0] = "image/apple.png";
images[1] = "image/samsung2.gif";
images[2] = "image/mac.png";
images[3] = "image/ipad.png";
images[4] = "image/iphone.png";

// Change Image
function changeImg(){
document.slide.src = images[i];

// Check If Index Is Under Max
if(i < images.length - 1){
i++; // Add 1 to Index
} else { 
i = 0; // Reset Back To O
}

// Run function every x seconds
setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
