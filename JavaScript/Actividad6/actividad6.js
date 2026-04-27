function calcular(){
 let nombre=document.getElementById("nombre").value;
 let cantidad=parseFloat(document.getElementById("cantidad").value);
 let total=0;
 if(cantidad>=5000){
  total=cantidad*1.10;
 }else if(cantidad>3000){
  total=cantidad*1.15;
 }else{
  total=cantidad*1.21;
 }
 document.getElementById("resultado").innerHTML=nombre+" debe pagar " + total + " euros";
}