function contadorLetras(string) {
    let parMinusculas = string.toLowerCase();
  
    const cantidadLetras = {};
    for (let i = 0; i < parMinusculas.length; i++) {
      const letra = parMinusculas[i];
      if (cantidadLetras[letra]) {
        cantidadLetras[letra]++;
      } else {
        cantidadLetras[letra] = 1;
      }
    }
  
    return cantidadLetras;
  }

  let par = "Una vaca sin cola vestida de uniforme";
  
  const cantidadLetras = contadorLetras(par);
  
  console.log(cantidadLetras);