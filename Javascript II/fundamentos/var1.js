{
    {
        {
            {
                var sera = 'Sera?'
                console.log(sera) //Aqui a variavel é visivel
            }
        }
    }
}
console.log(sera) //Aqui a variavel NÃO é visivel

function teste() {
    var local = 123
}

teste()
console.log(local) //Aqui a variavel NÃO é visivel

/*
Em resumo o var ou é visivel globalmente
ou a var fica apenas no escopo da função
*/