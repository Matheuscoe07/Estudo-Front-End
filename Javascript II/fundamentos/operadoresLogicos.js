function compras(trab1, trab2) {
    const comprarSorvete = trab1 || trab2
    const comprarTV = trab1 && trab2
    const comprarPC = trab1 != trab2
    const manterSaudavel = !comprarSorvete //operador unario

    return {comprarSorvete, comprarTV, comprarPC, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))