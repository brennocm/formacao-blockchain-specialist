let totalDeDias = parseInt(gets());

const qtdAnos = parseInt(totalDeDias/365); totalDeDias= parseInt(totalDeDias % 365);

const qtdMeses= parseInt(totalDeDias/30); totalDeDias= parseInt((totalDeDias%365)) %30 ;

let resultado = (qtdAnos + " ano(s) " + '\n' + qtdMeses +" mes(es)" + '\n' + totalDeDias + " dia(s)");

print(resultado);