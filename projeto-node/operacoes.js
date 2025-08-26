const adicao = (a, b) => {return a + b};
const subtracao = (a, b) => {return a - b};
const multiplicacao = (a, b) => {return a * b};
const divisao = (a, b) => {return b===0 ? console.error("Erro: Divisão por zero.") : a / b};

module.exports = { adicao, subtracao, multiplicacao, divisao};