export function numberToReal(numero) {
  var numero = numero.toFixed(2).split('.');
  numero[0] = 'R$ ' + numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero.join(',');
}

export function formatArrayOfStrings(stringArray) {
  let firstString = String(stringArray.slice(0, 1));
  let firstStringAux =
    firstString.charAt(0).toUpperCase() + firstString.slice(1);

  const stringArrayAux =
    firstStringAux +
    ', ' +
    stringArray.slice(1, -1).join(', ') +
    ' e ' +
    stringArray.slice(-1) +
    '.';

  return stringArrayAux;
}
