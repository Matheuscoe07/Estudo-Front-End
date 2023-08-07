console.log(typeof console) //o ponto de .log

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola' //Jeito mais comum
obj1['cor'] = 'preto'
console.log(obj1)
console.log(obj1.nome)

function obj(nome) {
    this.nome = nome //torna esse atributo ou função ou o que quiser público
    this.exec = function() {
        console.log('Executando...')
    }
}

const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()