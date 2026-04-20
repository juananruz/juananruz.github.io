function comprobarNumero(){
 const numero=parseInt(document.getElementById('numero').value);
 const resultado=document.getElementById('resultado');
 if(numero>=1 && numero<=30){
   if(numero % 2 === 0){
     resultado.innerHTML=`El número ${numero} es divisible por 2`;
   }else{
     resultado.innerHTML=`El número ${numero} NO es divisible por 2`;
   }
 }else{
   resultado.innerHTML='Introduce un número válido entre 1 y 30';
 }
}