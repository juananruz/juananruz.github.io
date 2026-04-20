function mostrarDatos(){
 const nombre=document.getElementById('nombre').value;
 const apellidos=document.getElementById('apellidos').value;
 const edad=parseInt(document.getElementById('edad').value);
 const añoNacimiento=new Date().getFullYear()-edad;
 let mensaje='';
 if(edad>=18){
   mensaje=`${nombre} ${apellidos} tiene ${edad} años, nació en ${añoNacimiento} y es mayor de Edad`;
 }else{
   mensaje=`${nombre} ${apellidos} tiene ${edad} años, nació en ${añoNacimiento} y es menor de Edad`;
 }
 document.getElementById('resultado').innerHTML=mensaje;
}