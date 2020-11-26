// JavaScript Document

//API for Taco
// http://taco-randomizer.herokuapp.com/random/?full-taco=true

document.getElementById('buttonCombo').onclick = function getTacoAndBeer() {
	
//call fetch
	var api_url = "https://taco-randomizer.herokuapp.com/random/?full-taco=true";
	async function getTaco (){
//response text
	const response = await fetch(api_url);
//complete data stream		
	const data = await response.json();
	const {tacoName} = data;
//display in browser as text		
	document.getElementById("viewTaco").innerHTML = ("Taco: " + data.base_layer.name);
//	document.getElementById("FavoriteTaco").innerHTML =("Favorite Taco: " + data.base_layer.name);	

document.getElementById("saveFaves").addEventListener("click", myFavesTaco);

function myFavesTaco() {
	console.log(data.base_layer.name);
	document.getElementById("FavoriteTaco").innerHTML =("Favorite Taco: " + data.base_layer.name);
	
}
	
	}

getTaco();


//API for Beer
// https://api.punkapi.com/v2/beers/random

//call fetch
fetch("https://api.punkapi.com/v2/beers/random")
    .then(response => response.json())
    .then(beers => {
	const beer = beers[0].name;
	//display in browser as text
	document.getElementById("viewBeer").innerHTML = ("Beer: " + beer);
//	document.getElementById("FavoriteBeer").innerHTML =("Favorite Beer: " + beer);
	
	document.getElementById("saveFaves").addEventListener("click", myFavesBeer);

function myFavesBeer() {
	console.log(beer);
	document.getElementById("FavoriteBeer").innerHTML =("Favorite Beer: " + beer);	
	
}
	
})
	
}
	
	






