console.log("Trabalhando com atribuição de variáveis");
const idade = 30;
let nome = "Renato";
const sobrenome = "Nazario";

/* Dessa forma os valores serão concatenados sem espaço */
console.log(nome + sobrenome);

/* Podemos usar a vírgula como separador dos itens */
console.log(nome, sobrenome);

/* Podemos também adicionar um texto concatenado contendo o espaço */
console.log(nome + " " + sobrenome);


/* Trabalhando com strings utilizando crase e interpolando as variáveis */
console.log(`Meu nome é ${nome} ${sobrenome}`);

/* Sobrescrevendo uma variável */

/* O const não pode ser sobrescrito para isso precisamos usar o let na variável */
nome = nome + sobrenome;
console.log(nome);

