//chaves representam um objeto
const prod1 = {} 
prod1.nome = 'Celular Ultra Mega' //Cria o nome dentro do objeto prod1
prod1.preco = 4998.00
prod1['Desconto'] = 0.4 //outro jeito de adicionar no objeto

console.log(prod1)

const prod2 = {
    nome: 'Camiseta',
    preco: 80,
    obj: {
        aaa: 'bbb'
    }
}

// JSON != Objeto
//JSON é formato de texto