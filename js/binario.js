export default function binario(){

/*binario */
var texto_binario = document.querySelector('#senha');
var botao_binario = document.querySelector('#b2');

function criptografia_binario(evento){
    evento.preventDefault();
    var criptografia = document.querySelector('.criptografia');
    var junta = [];
   for(var i=0;i<texto_binario.value.length;i++){

    var texto = [texto_binario.value.charCodeAt(i).toString(2)];
    
    junta += texto+'  ';
   }
   console.log(criptografia.innerHTML += '<p>'+junta+'</p>');
   

    
    
   
}
   
botao_binario.addEventListener('click',criptografia_binario);


}






/*

  var criptografia = document.querySelector('.criptografia');
    var junta = [];
   for(var i=0;i<texto_binario.value.length;i++){

    var texto = [texto_binario.value.charCodeAt(i).toString(2)];
    
    junta += texto;
   }
   console.log(criptografia.innerHTML += '<p>'+junta+'</p>');


*/