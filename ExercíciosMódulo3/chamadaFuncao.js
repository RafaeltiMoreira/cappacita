const { retornaLista } = require("./desafioModulo1")

const dadosClientes = [

{

  nome: 'Lucas',

  sobrenome: 'da Silva',

  idade: 12,

  genero: 'Masculino',

  plano: 'full',

  carencia: false,

  aquisicao: '12/01/2019',

 }, 

{

  nome: 'Carlos',

  sobrenome: 'da Silva',

  idade: 18,

  genero: 'Masculino',

  plano: 'full',

  carencia: false,

  aquisicao: '12/01/2019',

 }, 

{

  nome: 'Yasmin',

  sobrenome: 'da Silva',

  idade: 26,

  genero: 'Feminino',

  plano: 'full',

  carencia: false,

  aquisicao: '12/01/2019',

 }, 

{

  nome: 'Ana',

  sobrenome: 'Lima',

  idade: 17,

  genero: 'Feminino',

  plano: 'medium',

  carencia: false,

  aquisicao: '17/03/2019',

 }, 

{

  nome: 'Adriana',

  sobrenome: 'Menezes',

  idade: 27,

  genero: 'Feminino',

  plano: 'full',

  carencia: true,

  aquisicao: '14/09/2020',

 }, 

{

  nome: 'Ramon',

  sobrenome: 'Menezes',

  idade: 23,

  genero: 'Feminino',

  plano: 'full',

  carencia: true,

  aquisicao: '14/09/2020',

 }, 

{

  nome: 'Joao',

  sobrenome: 'Menezes',

  idade: 19,

  genero: 'Masculino',

  plano: 'full',

  carencia: true,

  aquisicao: '14/09/2020',

 }, 

{

  nome: 'Elizabeth',

  sobrenome: 'Menezes',

  idade: 24,

  genero: 'Feminino',

  plano: 'full',

  carencia: true,

  aquisicao: '14/09/2020',

 }, 

{

  nome: 'Maria',

  sobrenome: 'Menezes',

  idade: 14,

  genero: 'Feminino',

  plano: 'full',

  carencia: true,

  aquisicao: '14/09/2020',

 },

{

  nome: 'Mayara',

  sobrenome: 'Menezes',

  idade: 22,

  genero: 'Feminino',

  plano: 'full',

  carencia: true,

  aquisicao: '14/09/2020',

 }

];

 

console.log(retornaLista(dadosClientes))