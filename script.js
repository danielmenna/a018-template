//Pratica Guiada I
// a)

const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function funcaoA(array) {
  const triplo = []
  for (let valor of array) {
    triplo.push(valor * 3)
  }
  return triplo
}
console.log(funcaoA(listaDeNumeros))

//b

function funcaoB(array) {
  const soPAres = []
  for (let valor of array) {
    if (valor % 2 === 0) {
      soPAres.push(valor)
    }
  }
  return soPAres
}
console.log(funcaoB(listaDeNumeros))

//c
function funcaoC(array, callback) {
  const result = callback(array)
  console.log('B', result)
}
funcaoC(listaDeNumeros, funcaoB)

//Pratica Guiada II
const returnMap = listaDeNumeros.map(item => item * 3)
console.log(returnMap)

// Pratica Guiada III
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

function pokeFuncao(objeto) {
  const pokemon100 = { ...objeto, vida: 100 }
  return pokemon100
}
console.log(pokeFuncao(pokemons[0]))

const pokemonsVidaCheia = pokemons.map(pokeFuncao)
console.log(pokemonsVidaCheia)

const pokemonsDeFogo = pokemonsVidaCheia.filter(item => {
  return item.tipo === 'fogo'
})
console.log(pokemonsDeFogo)
