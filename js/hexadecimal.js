export default function hexadecimal(){



/*binario */
var texto_hexadecimal = document.querySelector('#senha');
var botao_hexadecimal = document.querySelector('#hexadecimal');

function criptografia_hexadecimal(evento){
    evento.preventDefault();
    var criptografia = document.querySelector('.criptografia');
    var junta = [];
   for(var i=0;i<texto_hexadecimal.value.length;i++){

    var texto = [texto_hexadecimal.value.charCodeAt(i).toString(16)];
    
    junta += texto+'  ';
   }
   console.log(criptografia.innerHTML += '<p>'+junta+'</p>');
   

    
    
   
}
   
botao_hexadecimal.addEventListener('click',criptografia_hexadecimal);


}