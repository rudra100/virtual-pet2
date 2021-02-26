//Create variables here
var dog;
var happyDog;
var foods;
var foodStock;
var database;

function preload()
{
	//load images here
  dogimg = loadImage  ("images/dogImg.png")
  happyDogimg = loadImage ("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock)
  dog.addImage (dogimg);
}


function draw() {  
background (46, 139, 87) 
if (keyWentDown(UP_ARROW)) {
  writeStock(foodS)
  dog.addImage (happyDogimg)
}
  drawSprites();
  //add styles here
text = "press UP_ARROW key to feed the dog"
}



