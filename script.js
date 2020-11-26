// JavaScript Document

//API for Taco
// http://taco-randomizer.herokuapp.com/random/?full-taco=true

document.getElementById('buttonCombo').onclick = function getTacoAndBeer() {
	
//call fetch
	var api_url = "http://taco-randomizer.herokuapp.com/random/?full-taco=true";
	async function getTaco (){
//response text
	const response = await fetch(api_url);
//complete data stream		
	const data = await response.json();
	const {tacoName} = data;
//display in browser as text		
	document.getElementById("viewTaco").innerHTML = ("Taco: " + data.base_layer.name);
	document.getElementById("FavoriteTaco").innerHTML =("Favorite Taco: " + data.base_layer.name);	
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
	document.getElementById("FavoriteBeer").innerHTML =("Favorite Beer: " + beer);
})


	
//	document.getElementById('saveFaves').onclick = function saveCombo(){
		
//	}
	
	}

//Save Favorites

//var myFaves = document.querySelector('#Favorites');
//retrieves api data
//myFaves.value = localStorage.getItem("beer", "data.base_layer.name");
//when the Save button is clicked, store the api data as favorites
//myFaves.addEventListener('click', saveFaves);
//sets the input of text area into local storage
//function saveFaves() {
  //  localStorage.setItem('Favorites', myFaves.value);
	
//	console.log(localStorage);
//}




