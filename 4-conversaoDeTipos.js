console.log("Conversão de Tipos");

/*Texto sendo concatenado com valor numérico.*/
console.log("ano" + 2024);

/* Queremos converter o texto em número */
console.log("2" + "2");

/* Usando a função parseInt para converter um texto em um número Inteiro */
console.log(parseInt("2") + parseInt("2"));

/* O interpretador do JS faz operações com texto as convertendo de forma implícita. Isso só não ocorre com a soma, já que o mesmo símbolo é usado para a concatenação. */
console.log("10" / "2");

/* Quando tentarmos fazer uma operação aritmética com um texto que não pode ser convertido teremos como retorno NaN (Not a Number) */
console.log("Ricardo" / 2);

/* No JS as casas decimais são expressas com o uso do ponto flutuante e não vírgula. */
console.log(6.5);