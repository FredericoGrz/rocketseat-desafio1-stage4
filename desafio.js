const numberOne = Number(prompt("Digite o primeiro numero"))
const numberTwo = Number(prompt("Digite o segundo numero"))

const somar = function () {
  return numberOne + numberTwo
}
const subtrair = function () {
  return numberOne - numberTwo
}
const multiplicar = function () {
  return numberOne * numberTwo
}
const dividir = function () {
  return (numberOne / numberTwo).toFixed(2)
}
const restoDivisao = function () {
  return numberOne % numberTwo
}

const isEven = (somar() % 2 == 0) ? true : false
const isTheSame = (numberOne === numberTwo) ? true : false

let mensagem = `Primeiro Numero: ${numberOne}
Segundo Numero: ${numberTwo}

Soma: ${somar()}
Subtracao: ${subtrair()}
Multiplicacao: ${multiplicar()}
Divisao: ${dividir()}
Resto da Divisao: ${restoDivisao()}

`

if (isEven)
  mensagem += 'A soma dos numeros resulta em um numero par!'
else
  mensagem += 'A soma dos numeros resulta em um numero impar!'

mensagem += `
`
if (isTheSame)
  mensagem += 'Os dois numeros inseridos sao iguais!'
else
  mensagem += 'Os dois numeros inseridos sao diferentes!'

alert(mensagem)