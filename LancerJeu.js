
//fonction erreur
function afficherErreur(message) {
    let errorContainer = document.getElementById("errorContainer");
    let reponseInput = document.getElementById("reponseInput");
    errorContainer.innerHTML = message;
    errorContainer.classList.add("error");
    reponseInput.classList.add("errorInput");
}

function enleverErreur() {
    let errorContainer = document.getElementById("errorContainer");
    let reponseInput = document.getElementById("reponseInput");
    errorContainer.innerHTML = "";
    errorContainer.classList.remove("error");
    reponseInput.classList.remove("errorInput");
}

function lancerJeu(){

    
    let validerButton =document.getElementById("validerButton")
    let reponseInput = document.getElementById("reponseInput")

    let GuessPokemon = pokemonImages;
    let i = 0;
    let score = 0;

    afficherPokemon(GuessPokemon[i]);
    
   validerButton.addEventListener("click", () => {
        if (reponseInput.value === PokemonNames[i]) {
            console.log("Correct!")
        i++;
        reponseInput.value="";
        enleverErreur();
        }
        else if(reponseInput.value !== PokemonNames[i]) {
            console.log("Incorrect!");
            afficherErreur("Mauvaise réponse, essayez encore !");
        }
        
        if (i < GuessPokemon.length) {
            afficherPokemon(GuessPokemon[i]);
        } else {
            console.log("Fin du jeu !");
        }
    });

    reponseInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // évite un comportement par défaut éventuel
    validerButton.click();  // simule le clic sur le bouton
  }
});


}



lancerJeu();    