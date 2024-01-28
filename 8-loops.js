console.log(`\n Trabalhando com loops`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis: \n");
console.log(listaDeDestinos + "\n");

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let i = 0;
let destinoExiste = false;

//Usando while
/* while (i < 3) {
    if (listaDeDestinos[i] == destino) {
        console.log(`Seu destino de viagem ${destino} existe e posição = ${i} \n`);
        destinoExiste = true;
        break;
    } i++;;

}; */

//Usando for
for (i = 0; i < 3; i++) {
    if (listaDeDestinos[i] == destino) {
        console.log(`Seu destino de viagem ${destino} existe e posição = ${i} \n`);
        destinoExiste = true;
        break;
    };

};

if (podeComprar && destinoExiste) {
    console.log(`Boa Viagem para ${destino}!`);
} else {
    console.log(`Desculpe, o destino da viagem pode estar indisponível ou você não tem permissão para viajar sozinho.`)
};

