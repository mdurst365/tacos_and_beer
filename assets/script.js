// JavaScript Document

//API for Taco
// https://taco-randomizer.herokuapp.com/random/?full-taco=true

document.getElementById('buttonCombo').onclick = function getTacoAndBeer() {
	
//call fetch
	var api_url = "https://taco-randomizer.herokuapp.com/random/?full-taco=true";
	async function getTaco (){
//response text
	const response = await fetch(api_url);
//complete data stream		
	const data = await response.json();
	const {tacoName} = data;
//test in console	
	console.log(data.base_layer.name)	
//display in browser as text		
	document.getElementById("viewTaco").innerHTML = ("Taco: " + data.base_layer.name);

//onclick event for add to favorites button
document.getElementById('saveTacoFaves').onclick = function myFaveTaco() {
// autopopulate favorite Taco from API data	
	document.getElementById("FavoriteTaco").innerHTML = ("Favorite Taco: " + data.base_layer.name);
}		
	}

getTaco();



//API for Beer
// http://https://api.punkapi.com/v2/beers/random

//call fetch
fetch("https://api.punkapi.com/v2/beers/random")
    .then(response => response.json())
    .then(beers => {
	const beer = beers[0].name;
	//test in console
	console.log(beer)
	//display in browser as text
	document.getElementById("viewBeer").innerHTML = ("Beer: " + beer);
	
	//onclick event for add to favorites button
document.getElementById('saveBeerFaves').onclick = function myFaveBeer() {
// autopopulate favorite Beer from API data	
	document.getElementById("FavoriteBeer").innerHTML = ("Favorite Beer: " + beer);
}

})
	
	}

//Save Favorites

//localStorage.getItem("beer", "data.base_layer.name");






