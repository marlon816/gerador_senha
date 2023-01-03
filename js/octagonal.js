export default function octagonal(){



/*octagonal*/
var texto_octagonal = document.querySelector('#senha');
var botao_octagonal = document.querySelector('#octagonal');

function criptografia_binaria(evento){
    evento.preventDefault();
    var criptografia = document.querySelector('.criptografia');
    var junta = [];
   for(var i=0;i<texto_octagonal.value.length;i++){

    var texto = [texto_octagonal.value.charCodeAt(i).toString(8)];
    
    junta += texto+' ';
   }
   console.log(criptografia.innerHTML += '<p>'+junta+'</p>');
   

    
    
   
}
   
botao_octagonal.addEventListener('click',criptografia_binaria);


}