//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //Soma o 2 com um undefined e retorna um NaN
imprimirSoma() //Soma o undefined com um undefined e retorna um NaN
imprimirSoma(2, 3, 4, 5, 6) //Soma o 2 com o 3 e ignora o resto

//Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3)) //Devolve a soma de 2 e 3
console.log(soma(2)) //Devolve a soma de 2 e 1, pois b esta setado com 1 como valor padrao