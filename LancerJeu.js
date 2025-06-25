
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
    let nextButton = document.getElementById("nextButton")
    let buttonTest = document.getElementById("buttonTest");
    const container = document.getElementById('PokemonContainer');
    let GuessPokemon = pokemonImages;
    let i = 0;
    let score = 0;

    afficherPokemon(GuessPokemon[i]);
    
    //on écoute le bouton "validerButton", on change de pokémon si le nom correspond à celui affiché.   
    // Si le nom ne correspond pas, on affiche un message d'erreur.
    // // Si le joueur a trouvé tous les Pokémon, on affiche un message de fin de jeu.
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
            container.classList.add("endGame");
            container.innerHTML = `<h2>Jeu terminé !</h2>`;
            validerButton.disabled = true;
            nextButton.disabled = true;
        }
    });

    //on écoute le bouton "nextButton" pour changer le pokémon affiché
    nextButton.addEventListener("click", () => {
        i++;
        reponseInput.value = "";
        enleverErreur();
        afficherPokemon(GuessPokemon[i]);

         if (i < GuessPokemon.length) {
            afficherPokemon(GuessPokemon[i]);
        } else {
            container.classList.add("endGame");
            container.innerHTML = `<h2>Jeu terminé !</h2>`;
            validerButton.disabled = true;
            nextButton.disabled = true;
        }

    });

//bouton test pour allez à la fin de la liste, à enlever.*********************
/**buttonTest.addEventListener("click", () => {
        i=150;
        reponseInput.value = "";
        enleverErreur();
        afficherPokemon(GuessPokemon[i]);
    });
************************************************************/

        //entrer = valider input
    reponseInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // évite un comportement par défaut éventuel
    validerButton.click();  // simule le clic sur le bouton
    }});

}

lancerJeu();