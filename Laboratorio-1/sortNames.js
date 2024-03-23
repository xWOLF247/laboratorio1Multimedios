
function sortNames(nombres) {
    const listaNombres = nombres.split(",");
  
    listaNombres.sort();
  
    return listaNombres.join(", ");
  }
  
  const nombres = " Yosuke, Salu, Beazel, Byron, Norman, Shalnark, Xein, Tetsuo, Crona";
  const listaOrdenada = sortNames(nombres);
  
  console.log(listaOrdenada);