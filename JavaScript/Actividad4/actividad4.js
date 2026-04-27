function verEstacion(){
 let mes=document.getElementById("mes").value.toLowerCase();
 let estacion="";
 switch(mes){
  case "diciembre":case "enero":case "febrero": estacion="Invierno"; break;
  case "marzo":case "abril":case "mayo": estacion="Primavera"; break;
  case "junio":case "julio":case "agosto": estacion="Verano"; break;
  default: estacion="Otoño";
 }
 document.getElementById("resultado").innerHTML=estacion;
}