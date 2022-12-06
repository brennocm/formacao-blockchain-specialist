const total = parseInt(gets());

let minutos = parseInt(total / 60);
let segundos = parseInt(total - (minutos * 60));
let horas =  parseInt(minutos / 60);
minutos = parseInt(minutos - (horas *60))

print(`${horas}:${minutos}:${segundos}`);