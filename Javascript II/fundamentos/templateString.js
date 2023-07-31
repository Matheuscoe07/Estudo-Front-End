const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + ' !'
const template = `
    Olá
    ${nome}!
`

//No formato com a crase, é possível realizar quebra de linha

console.log(concatenacao)
console.log(template)

//aceita também expressões matematicas por exemplo
console.log(`1 + 1 = ${1 + 1}`)

