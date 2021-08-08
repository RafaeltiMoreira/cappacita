module.exports.retornaLista = (array) => {

  var novaLista = [];

 

  for (var i = 0; i < array.length; i++) {

   if (array[i].idade >= 18 && array[i].idade <= 26) {

​    novaLista.push(array[i]);

   }

  }

  return novaLista

}