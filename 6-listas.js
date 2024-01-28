console.log(`Trabalhando com Listas`);

// Criar listas dessa maneira é muito trabalhoso
/* const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio deJaneiro`;

console.log("Destinos possíveis");
console.log(salvador, saoPaulo, rioDeJaneiro); */

/* Vamos trabalhar com arrays */

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

//Adicionando dinamicamente valores a lista
listaDeDestinos.push(`Curitiba`);

console.log("Destinos possíveis");
console.log(listaDeDestinos);


//Removendo itens de uma lista
listaDeDestinos.splice(0, 1);
console.log(listaDeDestinos);

//Acessando um único elemento da lista
console.log(listaDeDestinos[1], listaDeDestinos[0]);