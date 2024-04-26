async function getPokemonData(){
	let pokemonApiUrlBase = "https://pokeapi.co/api/v2/pokemon/"

	let randomPokemonNumber = Math.floor(Math.random() * 1025) + 1;

	let fullApiUrl = pokemonApiUrlBase + randomPokemonNumber;

    let response = await fetch(fullApiUrl);
	let responseData = await response.json();
	let result = responseData;

    // let promiseResponse = await fetch(fullApiUrl).then(data => {
	// 	return data.json();
	// })
	// result = promiseResponse;
    
	return result;
}


async function putDataOnPage(){
    document.getElementsByClassName("pokemonName")[0].textContent = dataToDisplay.name;
}

async function getAndDisplayPokemonData(){
    let data = await getPokemonData();
    console.log(data);
    putDataOnPage();
}

document.getElementById("create-encounter").addEventListener("click",getAndDisplayPokemonData);

// or 

// let pokemonButton = document.getElementById("create-encounter");
// pokemonButton.addEventListener("click", getAndDisplayPokemonData);
