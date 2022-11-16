function multiplicar() {
  let numero1 = document.getElementById('primerNumero').value;
  let numero2 = document.getElementById('segundoNumero').value;
  
  let producto = numero1*numero2;
  
  
  document.getElementById('resultado').innerText= producto+': metros';
} 








function myFunction() {   
  document.getElementById("moto").style.transform = "translate(45vw)"; 
  document.getElementById("moto").style.transition= "3s";

  // document.getElementById("moto").style.top="70%";
}
document.getElementById("botonSimulacion").addEventListener("click", function(){
  myFunction();});
  
  
  





















  
  
  // let velocidad  = document.getElementById('primerNumero').value;
  // let tiempo  = document.getElementById('segundoNumero').value;


  // // Code for Chrome, Safari, Opera
  // document.getElementById("moto").style.WebkitTransform = "translate(20px)"; 
  // document.getElementById("moto").innerHtml =" asd";
  // // Code for IE9
  // document.getElementById("moto").style.msTransform = "translate(20px)"; 
  // // Standard syntax
  // // document.getElementById("moto").style.transform = "translate(45vw)"; 
  // // document.getElementById("moto").style.transition= 'tiempo';

  // a