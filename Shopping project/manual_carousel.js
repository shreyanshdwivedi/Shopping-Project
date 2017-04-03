//manual jeans carousel
var imagesj=new Array();

imagesj[0]="images/jeans/i1.jpg";
imagesj[1]="images/jeans/i2.jpg";
imagesj[2]="images/jeans/i3.jpg";
imagesj[3]="images/jeans/i4.jpg";
imagesj[4]="images/jeans/i5.jpg";
imagesj[5]="images/jeans/i6.jpg";
imagesj[6]="images/jeans/i7.jpg";
var xj=0;
function leftchangejeans()
{
	if(xj==0)
	{
		xj=6;
		document.getElementById('i2').src=imagesj[(xj+1)%7];
		document.getElementById('i3').src=imagesj[(xj+2)%7];
		document.getElementById('i4').src=imagesj[(xj+3)%7];
	}
	else
	{
		xj--;
		document.getElementById('i2').src=imagesj[(xj+1)%6];
		document.getElementById('i3').src=imagesj[(xj+2)%6];
		document.getElementById('i4').src=imagesj[(xj+3)%6];
	}
		document.getElementById('i1').src=imagesj[xj];
}

function rightchangejeans()
{
	if(xj==6)
	{
		xj=0;
		document.getElementById('i2').src=imagesj[(xj+1)];
		document.getElementById('i3').src=imagesj[(xj+2)];
		document.getElementById('i4').src=imagesj[(xj+3)];
	}
	else
	{
		xj++;
		document.getElementById('i2').src=imagesj[(xj+1)%7];
		document.getElementById('i3').src=imagesj[(xj+2)%7];
		document.getElementById('i4').src=imagesj[(xj+3)%7];
	}
		document.getElementById('i1').src=imagesj[xj];
}




//manual tv carousel
var imagest=new Array();

imagest[0]="images/tv/i1.jpeg";
imagest[1]="images/tv/i2.jpeg";
imagest[2]="images/tv/i3.jpeg";
imagest[3]="images/tv/i4.jpeg";
imagest[4]="images/tv/i5.jpeg";
imagest[5]="images/tv/i6.jpeg";
imagest[6]="images/tv/i7.jpeg";
var xt=0;
function leftchangetv()
{
	if(xt==0)
	{
		xt=6;
		document.getElementById('ti2').src=imagest[(xt+1)%7];
		document.getElementById('ti3').src=imagest[(xt+2)%7];
		document.getElementById('ti4').src=imagest[(xt+3)%7];
	}
	else
	{
		xt--;
		document.getElementById('ti2').src=imagest[(xt+1)%6];
		document.getElementById('ti3').src=imagest[(xt+2)%6];
		document.getElementById('ti4').src=imagest[(xt+3)%6];
	}
		document.getElementById('ti1').src=imagest[xt];
}

function rightchangetv()
{
	if(xt==6)
	{
		xt=0;
		document.getElementById('ti2').src=imagest[(xt+1)];
		document.getElementById('ti3').src=imagest[(xt+2)];
		document.getElementById('ti4').src=imagest[(xt+3)];
	}
	else
	{
		xt++;
		document.getElementById('ti2').src=imagest[(xt+1)%7];
		document.getElementById('ti3').src=imagest[(xt+2)%7];
		document.getElementById('ti4').src=imagest[(xt+3)%7];
	}
		document.getElementById('ti1').src=imagest[xt];
}



//manual laptops carousel
var imagesl=new Array();

imagesl[0]="images/laptops/i1.jpeg";
imagesl[1]="images/laptops/i2.jpeg";
imagesl[2]="images/laptops/i3.jpeg";
imagesl[3]="images/laptops/i4.jpeg";
imagesl[4]="images/laptops/i5.jpeg";
imagesl[5]="images/laptops/i6.jpeg";
imagesl[6]="images/laptops/i7.jpeg";
var xl=0;
function leftchangelaptops()
{
	if(xl==0)
	{
		xl=6;
		document.getElementById('li2').src=imagesl[(xl+1)%7];
		document.getElementById('li3').src=imagesl[(xl+2)%7];
		document.getElementById('li4').src=imagesl[(xl+3)%7];
	}
	else
	{
		xl--;
		document.getElementById('li2').src=imagesl[(xl+1)%6];
		document.getElementById('li3').src=imagesl[(xl+2)%6];
		document.getElementById('li4').src=imagesl[(xl+3)%6];
	}
		document.getElementById('li1').src=imagesl[xl];
}

function rightchangelaptops()
{
	if(xl==6)
	{
		xl=0;
		document.getElementById('li2').src=imagesl[(xl+1)];
		document.getElementById('li3').src=imagesl[(xl+2)];
		document.getElementById('li4').src=imagesl[(xl+3)];
	}
	else
	{
		xl++;
		document.getElementById('li2').src=imagesl[(xl+1)%7];
		document.getElementById('li3').src=imagesl[(xl+2)%7];
		document.getElementById('li4').src=imagesl[(xl+3)%7];
	}
		document.getElementById('li1').src=imagesl[xl];
}





//manual laptops carousel
var imagesf=new Array();

imagesf[0]="images/furnitures/i1.jpeg";
imagesf[1]="images/furnitures/i2.jpeg";
imagesf[2]="images/furnitures/i3.jpeg";
imagesf[3]="images/furnitures/i4.jpeg";
imagesf[4]="images/furnitures/i5.jpeg";
imagesf[5]="images/furnitures/i6.jpeg";
imagesf[6]="images/furnitures/i7.jpeg";
var xf=0;
function leftchangefurni()
{
	if(xf==0)
	{
		xf=6;
		document.getElementById('fi2').src=imagesf[(xf+1)%7];
		document.getElementById('fi3').src=imagesf[(xf+2)%7];
		document.getElementById('fi4').src=imagesf[(xf+3)%7];
		document.getElementById('fi5').src=imagesf[(xf+4)%7];		
	}
	else
	{
		xf--;
		document.getElementById('fi2').src=imagesf[(xf+1)%6];
		document.getElementById('fi3').src=imagesf[(xf+2)%6];
		document.getElementById('fi4').src=imagesf[(xf+3)%6];
		document.getElementById('fi5').src=imagesf[(xf+4)%7];
	}
		document.getElementById('fi1').src=imagesf[xf];
}

function rightchangefurni()
{
	if(xf==6)
	{
		xf=0;
		document.getElementById('fi2').src=imagesf[(xf+1)];
		document.getElementById('fi3').src=imagesf[(xf+2)];
		document.getElementById('fi4').src=imagesf[(xf+3)];
		document.getElementById('fi5').src=imagesf[(xf+4)%7];
	}
	else
	{
		xf++;
		document.getElementById('fi2').src=imagesf[(xf+1)%7];
		document.getElementById('fi3').src=imagesf[(xf+2)%7];
		document.getElementById('fi4').src=imagesf[(xf+3)%7];
		document.getElementById('fi5').src=imagesf[(xf+4)%7];
	}
		document.getElementById('fi1').src=imagesf[xf];
}




//manual laptops carousel
var imagesm=new Array();

imagesm[0]="images/mobiles/i1.jpeg";
imagesm[1]="images/mobiles/i2.jpeg";
imagesm[2]="images/mobiles/i3.jpeg";
imagesm[3]="images/mobiles/i4.jpeg";
imagesm[4]="images/mobiles/i5.jpeg";
imagesm[5]="images/mobiles/i6.jpeg";
imagesm[6]="images/mobiles/i7.jpeg";
var xm=0;
function leftchangemobiles()
{
	if(xm==0)
	{
		xm=6;
		document.getElementById('mi2').src=imagesm[(xm+1)%7];
		document.getElementById('mi3').src=imagesm[(xm+2)%7];
		document.getElementById('mi4').src=imagesm[(xm+3)%7];
		document.getElementById('mi5').src=imagesm[(xm+4)%7];		
		document.getElementById('mi6').src=imagesm[(xm+5)%7];		

	}
	else
	{
		xm--;
		document.getElementById('mi2').src=imagesm[(xm+1)%6];
		document.getElementById('mi3').src=imagesm[(xm+2)%6];
		document.getElementById('mi4').src=imagesm[(xm+3)%6];
		document.getElementById('mi5').src=imagesm[(xm+4)%7];
		document.getElementById('mi6').src=imagesm[(xm+5)%7];

	}
		document.getElementById('mi1').src=imagesm[xm];
}

function rightchangemobiles()
{
	if(xm==6)
	{
		xm=0;
		document.getElementById('mi2').src=imagesm[(xm+1)];
		document.getElementById('mi3').src=imagesm[(xm+2)];
		document.getElementById('mi4').src=imagesm[(xm+3)];
		document.getElementById('mi5').src=imagesm[(xm+4)];
		document.getElementById('mi6').src=imagesm[(xm+5)];
	}
	else
	{
		xm++;
		document.getElementById('mi2').src=imagesm[(xm+1)%7];
		document.getElementById('mi3').src=imagesm[(xm+2)%7];
		document.getElementById('mi4').src=imagesm[(xm+3)%7];
		document.getElementById('mi5').src=imagesm[(xm+4)%7];
		document.getElementById('mi5').src=imagesm[(xm+5)%7];
	}
		document.getElementById('mi1').src=imagesm[xm];
}




//manual laptops carousel
var imagesc=new Array();

imagesc[0]="images/camera/i1.jpeg";
imagesc[1]="images/camera/i2.jpeg";
imagesc[2]="images/camera/i3.jpeg";
imagesc[3]="images/camera/i4.jpeg";
imagesc[4]="images/camera/i5.jpeg";
imagesc[5]="images/camera/i6.jpeg";
imagesc[6]="images/camera/i7.jpeg";
var xc=0;
function leftchangecamera()
{
	if(xc==0)
	{
		xc=6;
		document.getElementById('ci2').src=imagesc[(xc+1)%7];
		document.getElementById('ci3').src=imagesc[(xc+2)%7];
		document.getElementById('ci4').src=imagesc[(xc+3)%7];
	}
	else
	{
		xc--;
		document.getElementById('ci2').src=imagesc[(xc+1)%6];
		document.getElementById('ci3').src=imagesc[(xc+2)%6];
		document.getElementById('ci4').src=imagesc[(xc+3)%6];
	}
		document.getElementById('ci1').src=imagesc[xc];
}

function rightchangecamera()
{
	if(xc==6)
	{
		xc=0;
		document.getElementById('ci2').src=imagesc[(xc+1)];
		document.getElementById('ci3').src=imagesc[(xc+2)];
		document.getElementById('ci4').src=imagesc[(xc+3)];
	}
	else
	{
		xc++;
		document.getElementById('ci2').src=imagesm[(xc+1)%7];
		document.getElementById('ci3').src=imagesm[(xc+2)%7];
		document.getElementById('ci4').src=imagesm[(xc+3)%7];
	}
		document.getElementById('ci1').src=imagesm[xc];
}

