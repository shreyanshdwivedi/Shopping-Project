var img=new Array();
var i=1;

img[0]="images/carousel/i2.png";
img[1]="images/carousel/i3.png";
img[2]="images/carousel/i4.png";
img[3]="images/carousel/i5.png";
img[4]="images/carousel/i1.png";

function imgchange()
{
	document.getElementById('carousel').src=img[i];
	if(i<4){
		i+=1;}
	else{
		i=0;}
}
	
window.onload=function(){setInterval(function(){imgchange();},2000);};


var countDownDate = new Date("Mar 31, 2017 00:00:01").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
	document.getElementById("demo").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



//nav_sidebar
$(document).ready(function(){
$(".fa-times").click(function(){
$(".main-bar").addClass("hide-bar");
$(".toggle_menu").addClass("opacity_one");
})

$(".toggle_menu").click(function(){
$(".main-bar").removeClass("hide-bar");
$(".toggle_menu").removeClass("opacity_one");
})
}
);