function init(){
	var pretags = document.getElementsByTagName("pre");
	pretags[0].onclick =changeColor;
	pretags[1].onclick =changeColor;

}
function changeColor(){
	
	var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
	this.style.color = randomcolor;
}
onload = init;
