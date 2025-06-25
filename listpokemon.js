// `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png` => url pour images sprites en pixels mais petits.
// `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png` => url images plus récentes (3d) et plus grandes.
//[Math.floor(Math.random() * pokemonImages.length)]; // Pour obtenir un Pokémon aléatoire

// Liste des images de Pokémon
// On utilise l'API PokeAPI pour récupérer les images des 151 premiers Pokémons
const pokemonImages = [];
for (let i = 1; i <= 151; i++) {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`;
  pokemonImages.push(url);
}
// Liste des noms de Pokémon
const PokemonNames = [
  "bulbizarre","herbizarre","florizarre","salamèche","reptincel","dracaufeu",
  "carapuce","carabaffe","tortank","chenipan","chrysacier","papilusion",
  "aspicot","coconfort","dardargnan","roucool","roucoups","roucarnage",
  "rattata","rattatac","piafabec","rapasdepic","abo","arbok",
  "pikachu","raichu","sabelette","sablaireau","nidoran","nidorina",
  "nidoqueen","nidoran","nidorino","nidoking","mélofée","mélodelfe",
  "goupix","feunard","rondoudou","grodoudou","nosferapti","nosferalto",
  "mystherbe","ortide","rafflesia","paras","parasect","mimitoss",
  "aéromite","taupiqueur","triopikeur","miaouss","persian","psykokwak",
  "akwakwak","ferosinge","colossinge","caninos","arcanin","ptitard",
  "têtarte","tartard","abra","kadabra","alakazam","machoc",
  "machoipeur","mackogneur","chétiflor","boustiflor","empiflor",
  "tentacool","tentacruel","racaillou","gravalanch","grolem","ponyta",
  "galopa","ramoloss","flagadoss","magnéti","magnéton","canarticho",
  "doduo","dodrio","otaria","lamantine","tadmorv","grotadmorv",
  "kokiyas","crustabri","fantominus","spectrum","ectoplasma","onix",
  "soporifik","hypnomade","krabby","krabboss","voltorbe","électrode",
  "noeunoeuf","noadkoko","osselait","ossatueur","kicklee","tygnon",
  "excelangue","smogo","smogogo","rhinocorne","rhinoféros","leveinard",
  "saquedeneu","kangourex","hypotrempe","hypocéan","poissirène",
  "poissoroy","stari","staross","m.mime","insécateur","lippoutou",
  "élektek","magmar","scarabrute","tauros","magicarpe","léviator",
  "lokhlass","métamorph","évoli","aquali","voltali","pyroli","porygon",
  "amonita","amonistar","kabuto","kabutops","ptéra","ronflex",
  "artikodin","électhor","sulfura","minidraco","draco","dracolosse",
  "mewtwo","mew"
];



console.log(pokemonImages[0]);
console.log(PokemonNames[0]);
//let nomPokemon = document.createElement('h2');
//nomPokemon.innerHTML = PokemonNames[0];
//document.getElementById('test').appendChild(nomPokemon);

// Fonction pour afficher le Pokémon dans le conteneur
function afficherPokemon(listePokemon) {
  const container = document.getElementById('PokemonContainer');
  container.innerHTML = "";
  const src = listePokemon;
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Pokémon';
    img.style.transform = "scale(1)"; // Optionnel : ajuste le zoom de l'image
    container.appendChild(img);
  };



  