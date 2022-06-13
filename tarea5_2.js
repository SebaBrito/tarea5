let pokemones = ['Pikachu','Charmander','Bulbasaur','Squirtle'];
const pokemayus = pokemones.forEach(capitalize);
 
function capitalize(pokemones, index, arr) {
  arr[index] = pokemones.toUpperCase();
}
console.log(pokemones);

