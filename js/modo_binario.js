export default function modo_binario(){



var modo_binario = document.querySelector('#modo_binario');

function tema_binario(){
    var tela_criptografia = document.querySelector('.tela_criptografia');
    var formulario = document.querySelector('.formulario');
    var formulario_input = document.querySelector('.formulario input');
    var formulario_input_hover = document.querySelector('.formulario input:hover');
    var botoes = document.querySelector('.botoes');


    botoes.classList.remove('noite');
    formulario_input.classList.remove('noite');
    document.body.classList.remove('noite');
    formulario.classList.remove('noite');
    tela_criptografia.classList.remove('noite');


    botoes.classList.toggle('binario');
    formulario_input.classList.toggle('binario');
    document.body.classList.toggle('binario');
    formulario.classList.toggle('binario');
    tela_criptografia.classList.toggle('binario');
}


modo_binario.addEventListener('click',tema_binario);


}