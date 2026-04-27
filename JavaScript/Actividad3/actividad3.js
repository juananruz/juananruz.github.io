function mostrarEstacion(){
 let estaciones=["Invierno","Primavera","Verano","Otoño"];
 let n=document.getElementById("numero").value;
 document.getElementById("resultado").innerHTML="<b>"+estaciones[n-1]+"</b>";
}