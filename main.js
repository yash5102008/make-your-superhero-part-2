var canvas = new fabric.Canvas('mycanvas');


player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object="";
var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("thor player.jpg", function(IMG) {
       player_object = Img;
       
       player_object.scaletowidth(150);
       player_object.scaletoheight(140);
       player_object.set({
       top:player_y,
       left:player_x
       });
       canvas.add(player_object);

    });
}
   
    funtion new_image(get_image)
    {
        fabric.Image.fromURL(get_image, function(IMG) {
            block_image_object = IMG;

            block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});
        }

        window.addEventListener("keydown", my_keydown );
    
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p and shift pressed together");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m and shift pressed together");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}
if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	if(keyPressed == '87')