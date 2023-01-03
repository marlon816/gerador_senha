export default function noite(){
var modo_noite = document.querySelector('#noite');


function noite(){
    var tela_criptografia = document.querySelector('.tela_criptografia');
    var formulario = document.querySelector('.formulario');
    var formulario_input = document.querySelector('.formulario input');
    var formulario_input_hover = document.querySelector('.formulario input:hover');
    var botoes = document.querySelector('.botoes');

    botoes.classList.remove('binario');
    formulario_input.classList.remove('binario');
    document.body.classList.remove('binario');
    formulario.classList.remove('binario');
    tela_criptografia.classList.remove('binario');


    botoes.classList.toggle('noite');
    formulario_input.classList.toggle('noite');
    document.body.classList.toggle('noite');
    formulario.classList.toggle('noite');
    tela_criptografia.classList.toggle('noite');

   
}



modo_noite.addEventListener('click',noite);

}

