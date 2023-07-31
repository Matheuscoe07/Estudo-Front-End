const escola = "Cod3r"

console.log(escola.charAt(4)) //Devolve o que esta no indice 4 da string
console.log(escola.charAt(5)) //Devolve o que esta no indice 5 da string (nada)
console.log(escola.charCodeAt(3)) //Devolve o que esta no indice 3 da string mas no código unicode
console.log(escola.indexOf('3')) //Devolve em que indice esta a string '3'

console.log(escola.substring(1)) //Devolve a string sem o indice 1
console.log(escola.substring(0, 3)) //Devolve a string do indice 0 ao indice 3

console.log('Escola'.concat(escola).concat('!')) //Concatena as strings indicadas
console.log(escola.replace(3), 'e') //Substitui a string no indice 3 pela letra e

console.log('Ana, Maria, Pedro'.split(',')) //Devolve uma array dos elementos divididos por ','