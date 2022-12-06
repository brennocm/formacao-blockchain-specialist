const minutosFaltantes = parseInt(gets());
const valores = gets().split(" ");
const d = parseInt(valores[0]);
const j = parseInt(valores[1]);

if(d + j > minutosFaltantes) {
  print('Deixa para amanha!');
} else {
  print('Farei hoje!');
}