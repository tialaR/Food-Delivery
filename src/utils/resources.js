export function numberToReal(numero) {
  var numero = numero.toFixed(2).split('.');
  numero[0] = 'R$ ' + numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero.join(',');
}

export function formatArrayOfStrings(stringArray) {
  const stringArrayAux =
    stringArray.slice(0, -1).join(', ') + ' e ' + stringArray.slice(-1) + '.';

  return stringArrayAux;
}
