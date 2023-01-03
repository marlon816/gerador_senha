export default function gera_senha(){

var botao_senha_aleatoria = document.querySelector('#senha_aleatoria_forte'); 
var numero_caracteres = document.querySelector('#numero_caractere');

function gera_senha_forte(evento){

   
    evento.preventDefault();

    var senha_aleatoria = [['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','s','t','u','v','x','y','z','w'],[1,2,3,4,5,6,7,8,9,0],['!','@','#','$','%','¨','&','*','(',')','_','-','+','.',',','/']];
    var senha = [];

for(var i=0;i<numero_caracteres.value;i++){

    var r_letras = (Math.floor(Math.random() * (23 - 0) + 0));
    var r_numeros = (Math.floor(Math.random() * (9 - 0) + 0));
    var r_simbolos = (Math.floor(Math.random() * (16 - 0) + 0));
    var r_letras_2 = (Math.floor(Math.random() * (23 - 0) + 0));
    var r_numeros_2= (Math.floor(Math.random() * (9 - 0) + 0));
    var r_simbolos_2= (Math.floor(Math.random() * (16 - 0) + 0));

var senha_aleatoria_1 = senha_aleatoria[0][r_letras] + senha_aleatoria[1][r_numeros]+ senha_aleatoria[0][r_letras].toUpperCase()+senha_aleatoria[2][r_simbolos];

var senha_aleatoria_2 = senha_aleatoria[1][r_numeros_2] + senha_aleatoria[0][r_letras_2]+ senha_aleatoria[0][r_letras_2].toUpperCase()+senha_aleatoria[2][r_simbolos_2];

senha += senha_aleatoria_1 + senha_aleatoria_2+'  ';

console.log(senha);

}

var texto = document.querySelector('.criptografia');

texto.innerHTML = senha;




}




botao_senha_aleatoria.addEventListener('click',gera_senha_forte);


}