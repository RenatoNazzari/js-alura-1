console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = true;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

/* if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); // removendo um item
} else if (estaAcompanhado) {
    console.log("Está acompanhado");
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
} else {
    console.log("Não está acompanhado");
    console.log(listaDeDestinos);
}; */

/* Tipos de operadores lógicos */
// console.log("Operadores booleanos");

// console.log("maior que >");
// console.log("menor que <");
// console.log("menor ou igual <=");
// console.log("maior ou igual >=");
// console.log("igual ==");

/* Retorno com tipo booleano */
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);

// Operadores lógicos encadeados
if (idadeComprador >= 18 || estaAcompanhado) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(1, 1); // removendo um item
    console.log(listaDeDestinos);
} else {
    console.log("Não está acompanhado");
    console.log(listaDeDestinos);
};

console.log("Embarque: \n")
if ((idadeComprador >= 18 || estaAcompanhado) && temPassagemComprada) {
    console.log("Embarque autorizado!")
} else {
    console.log("Embarque não autorizado!")
};