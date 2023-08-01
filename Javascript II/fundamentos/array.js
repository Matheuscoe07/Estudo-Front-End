//array em js é heterogeneo, é possivel misturar tipos de elementos

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) //Devolve os valores no indice 0 e no indice 3
console.log(valores[4]) //O indice 4 não existe, por isso devolve o undefined

valores[4] = 10 //aadiciona o valor 10 no indice 4

console.log(valores[4])
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //Outro jeito de adicionar os valores no array
console.log(valores)

console.log(valores.pop()) //tira o valor do array
delete valores[0] //exclui o valor no indice 0
console.log(valores)

console.log(typeof valores)