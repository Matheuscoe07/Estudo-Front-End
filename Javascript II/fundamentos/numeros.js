const peso1 = 1.0
const peso2 = Number('2.0') //Determina o tipo da constante

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //Determina quantas casas decimais você quer
console.log(media.toString()) //Transforma de numero para string
console.log(media.toString(2)) //Transforma de numero para string binário
console.log(typeof media) //Devolve o tipo da constante ou variável