function verEstacion(){
 let mes=document.getElementById("mes").value.toLowerCase();
 let estacion="";
 if(mes=="diciembre"||mes=="enero"||mes=="febrero"){
  estacion="Invierno";
 }else if(mes=="marzo"||mes=="abril"||mes=="mayo"){
  estacion="Primavera";
 }else if(mes=="junio"||mes=="julio"||mes=="agosto"){
  estacion="Verano";
 }else{
  estacion="Otoño";
 }
 document.getElementById("resultado").innerHTML=estacion;
}