function manipularDOM(){
 const titulo=document.getElementById('titulo');
 titulo.textContent='DOM Manipulado';
 titulo.style.color='red';
 titulo.classList.add('titulo-activo');
 const p=document.getElementById('parrafo');
 p.innerHTML+=' <strong>Texto en negrita añadido</strong>';
 const celdas=document.querySelectorAll('.celda');
 celdas[0].textContent='Nueva Celda 1';
 celdas[1].textContent='Nueva Celda 2';
}
function agregarCelda(){
 const fila=document.getElementById('fila');
 const td=document.createElement('td');
 td.textContent='Nueva Celda';
 td.className='celda';
 td.onclick=function(){this.style.backgroundColor='yellow'};
 fila.appendChild(td);
}
function colorCeldas(){
 document.querySelectorAll('.celda').forEach(c=>c.style.backgroundColor='lightblue');
}
document.querySelectorAll('.celda').forEach(c=>{
 c.onclick=function(){this.style.backgroundColor='yellow'};
});