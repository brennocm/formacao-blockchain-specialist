const N = parseInt(gets());

const regexPlacaValida = new RegExp("^[A-Z]{3}-[0-9]{4}$");

for(let i = 0; i < N; i++){
  const placa = gets();
  if (placa.match(regexPlacaValida)) {
    
    let digitoFinal = placa.substr(7);
    
      if ((digitoFinal === '1') || (digitoFinal === '2')){
        print("SEGUNDA");
        
      } else if ((digitoFinal === '3') || (digitoFinal === '4')){
        print("TERCA");
        
      } else if ((digitoFinal === '5') || (digitoFinal === '6')){
        print("QUARTA");
        
      } else if ((digitoFinal === '7') || (digitoFinal === '8')){
        print("QUINTA");
        
      } else if ((digitoFinal === '9') || (digitoFinal === '0')){
        print("SEXTA");
    
      }
    
  } else {
    print("FALHA");
  }
}