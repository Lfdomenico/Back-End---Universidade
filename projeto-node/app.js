//para importar um módulo, deve-s chamar a função 'require', passando como parâmetro o caminho que se deseja importa;

//como o método 'require' retorna um o objeto definido no 'module.exports', ele deve ser armazenado em uma váriavel ou constante; 
const operacoesBasicas = require("./operacoes");

/* 
    A constante 'operacoesBasicas' agora é um objeto que se parece com algo assim:
    {
        adicao: [Function: adicao],
        subtraacao: [Function: subtraacao],
        multiplicacao: [Function: multiplicacao],
        divisao: [Function: divisao]
    }
*/

console.log(operacoesBasicas.adicao(8, 4));
console.log(operacoesBasicas.subtracao(15, 7));
console.log(operacoesBasicas.multiplicacao(6, 3));
console.log(operacoesBasicas.divisao(20, 5));
console.log(operacoesBasicas.divisao(10, 0));

// npm install lodash 

//importanto a biblioteca 'lodash' para utilizar números aleatórios(random);
const _ = require('lodash');
console.log(_.random(1, 30));
