//array one will be cooking method
var cooking=[
"steam",
"fried",
"raw",
"sir fry",
"deep fried",
"soaked"
];
//array two wil be a type of food
var type=[
"spagetti",
"seafood",
"curry",
"hot dog",
"chicken",
"rice",
"human",
"pork",
"bread",
"potato"
];
//make the computer choose a food and a way it is cooked
var randomOne=Math.floor(Math.random()*cooking.length);
var randomTwo=Math.floor(Math.random()*type.length);
window.alert(cooking[randomOne]+ " " + type[randomTwo]);