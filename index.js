var numSquare=6;
var colors=PickrandomColor(numSquare);
var squares= document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messegeDisplay=document.querySelector("#messegeDisplay");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#resetButton");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("style");
	hardBtn.classList.remove("style");
	numSquare=3;
	colors=PickrandomColor(numSquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
})

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("style");
	easyBtn.classList.remove("style");
	numSquare=6;
	colors=PickrandomColor(numSquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display="block";
		
	}

})
  

resetButton.addEventListener("click",function(){
	colors=PickrandomColor(numSquare);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    messegeDisplay.textContent="";
    this.textContent="New Colors";
    for(var i=0;i<squares.length;i++){
    	squares[i].style.backgroundColor=colors[i];
    }
   h1.style.backgroundColor="steelblue";
})

colorDisplay.textContent= pickedColor;

for(var i=0; i<squares.length ;i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			messegeDisplay.textContent="Correct";
			changeColor(pickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="play again ?"
		}
		else{
			this.style.backgroundColor="black";
			messegeDisplay.textContent="Try again!!";
			messegeDisplay.style.backgroundColor="white";
		}

		
	});
}
  function changeColor(color) {
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
	
}
	function pickColor() {
	   var random= Math.floor(Math.random()*colors.length);
	    return colors[random];
	}


	function PickrandomColor(num){
		var arr=[];
		for(var i=0;i<num;i++){
           arr.push(randomColor());
		}
		return arr;
	}
	function randomColor(){
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		return 'rgb(' + r + ', ' + g + ', '+ b+')';
	}
