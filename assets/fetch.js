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
		const { name, description, image_url } = data.base_layer;
	//display in browser as text		
		document.getElementById("tacoName").innerHTML = ("Taco: " + data.base_layer.name);
	
	//onclick event for Make Suggestion button
	document.getElementById('saveTacoFaves').onclick = function myFaveTaco() {		
	// autopopulate Taco Name from API data	
		document.getElementById("FavoriteTaco").innerHTML = ("Favorite Taco: " + data.base_layer.name);
	}		
	
	}
	
	getTaco();
	
	/*save fave Tacos to local storage
	window.localStorage.setItem("myFaveTacos", data.base_layer.name);
	//return fave Tacos from local storage
	window.localStorage.getItem("myFaveTacos");		
	*/
		
			
	
	//API for Beer
	// http://https://api.punkapi.com/v2/beers/random
	
	//call fetch
	fetch("https://api.punkapi.com/v2/beers/random")
		.then(response => response.json())
		.then(beers => {
		const beer = beers[0];
		//display in browser as text
		document.getElementById("beerName").innerHTML = ("Beer Name: " + beer.name);
		//add Beer description too
		document.getElementById("beerDescription").innerHTML = ("Beer Description: " + beer.description);				
		//onclick event for add to favorites button
		const beerFavesArray = []
		//put the first beer in your object
		const beerObject = {
			name: beer.name,
			description: beer.description,
		}
	
	document.getElementById('saveBeerFaves').onclick = function myFaveBeer() {
	// autopopulate favorite Beer from API data	
		beerFavesArray.push(beerObject);
		window.localStorage.setItem("favBeers", JSON.stringify(beerFavesArray))
		getListofBeers();
		document.getElementById("FavoriteBeer").innerHTML = ("My Favorite Beers: " + beer.name);

	}


	document.getElementById('saveTacoFaves').onclick = function myFaveTaco() {
		// autopopulate favorite Taco from API data	
			tacoFavesArray.push(tacoObject);
			window.localStorage.setItem("favBeers", JSON.stringify(tacoFavesArray))
			getListofTacos();
			document.getElementById("saveTacoFaves").innerHTML = ("My Favorite Tacos: " + data.base_layer.name);
	
		}

	//save fave Beer to local storage
	window.localStorage.setItem("myFaveBeer", beer);
	//return fave Tacos from local storage
	window.localStorage.getItem("myFaveBeer");	
	})
		
		}	
	//Show me what is in local storage
	console.log(localStorage)
	//Clear Local Storage
	document.getElementById('clear').onclick = function myFaveBeer() {
		window.localStorage.clear();
	}
//	
	
	function getListofBeers() {
		const beerArray = JSON.parse(window.localStorage.getItem("favBeers"));
		console.log(beerArray)
	}


	//clear local storage

	$("#clear").click(function(){
		localStorage.clear();
		location.reload();
	})
	
	