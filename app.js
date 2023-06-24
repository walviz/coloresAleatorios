// seleccionar elementos del Dom
const boton = document.querySelector('button');// selecciona la etiqueta html button
const color = document.getElementById('color');




boton.addEventListener('click',function () {
  let colorAleatorio = generarColorAleatorio();// genera codigo al azar
  color.innerHTML= colorAleatorio;// se asigna a la etiqueta html
  document.body.style.backgroundColor=colorAleatorio;// actualiza el color de fondo del background
})





function generarColorAleatorio() {
  let digitos = '0123456789ABCDEF';
  let colorHex ='#';
  for(let i=0 ; i<6 ;i++ ){
    /*Math.random()*16 numero aleatorio lo multiplica por 16*/
    /* Math.floor() redondea el numero a entero*/
    let indiceAleatorio = Math.floor(Math.random()*16);
    colorHex += digitos[indiceAleatorio];// expande la variable con los valores del indice
  }
  return colorHex;
}