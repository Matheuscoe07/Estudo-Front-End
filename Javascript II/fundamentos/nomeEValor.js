//par nome/valor

const saudacao = 'opa' //contexto lexico, onde foi definido o par chave/valor

function exec() {
    const saudacao = 'Falaa' //contexto lexico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua tal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)