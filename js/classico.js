export default function modo_classico(){

    var modo_classico = document.querySelector('#classico');

    function tema_classico(){
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
        
        botoes.classList.remove('noite');
        formulario_input.classList.remove('noite');
        document.body.classList.remove('noite');
        formulario.classList.remove('noite');
        tela_criptografia.classList.remove('noite');
    }

    modo_classico.addEventListener('click',tema_classico);

}