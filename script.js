var input = document.querySelector('input');
var button = document.querySelector('button');
let numeroSorteado = Math.round(Math.random() * 10);
console.log(numeroSorteado);
input.focus();

// function sorteia() {
//   return Math.round(Math.random() * 10);
// }

// function sorteiaNumeros(quantidade) {
//   var segredos = [];

//   var numero = 1;

//   while (numero <= quantidade) {
//     var numeroAleatorio = sorteia();
//     var achou = false;

//     if (numeroAleatorio !== 0) {
//       for (var posicao = 0; posicao < segredos.length; posicao++) {
//         if (segredos[posicao] == numeroAleatorio) {
//           achou = true;
//           break;
//         }
//       }

//       if (achou == false) {
//         segredos.push(numeroAleatorio);
//         numero++;
//       }
//     }
//   }

//   return segredos;
// }

// var segredos = sorteiaNumeros(3);

// console.log(segredos);

// input.focus();

// function verifica() {
//   var achou = false;

//   for (var posicao = 0; posicao < segredos.length; posicao++) {
//     if (input.value == segredos[posicao]) {
//       alert('Você ACERTOU!');
//       achou = true;
//       break;
//     }
//   }

//   if (achou == false) {
//     alert('Você ERROU!');
//   }

//   input.value = '';
//   input.focus();
// }

// function sorteia() {
//   let numeroSorteado = Math.round(Math.random() * 10);
// }

function verifica() {
  if (input.value != numeroSorteado) {
    alert('voce errou');
  } else {
    alert('voce acertou');
  }
  input.value = '';
  input.focus();
}
button.onclick = verifica;
