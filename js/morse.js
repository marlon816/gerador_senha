export default function morse(){

var alfabeto = {
    //minusculos
    'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
    'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
    'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
    'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
    'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
    'y': '-.--',  'z': '--..',  

    //maiusculo

    'A': '.-',    'B': '-...',  'C': '-.-.', 'D': '-..',
    'E': '.',     'F': '..-.',  'G': '--.',  'H': '....',
    'I': '..',    'J': '.---',  'K': '-.-',  'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',  'P': '.--.',
    'Q': '--.-',  'R': '.-.',   'S': '...',  'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',  'X': '-..-',
    'Y': '-.--',  'Z': '--..',  

    //numeros

    '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----', 

    //simbolos

    ' ': '/',    '!':'-·-·--', ':':'---···',
    '.':'·-·-·-', '/':'-··-·' ,';':'-·-·-·',
    ',':'--··--', '(':'-·--·', '=':'-···-',
    '?':'··--··', ')':'-·--·-','-':'-····-',
    "'":'·----·', '&':'·-···','_':'··--·-',
    '"':'·-··-·', '$':'···-··-','@':'·--·-·',

    //alfabeto2
    'ã':'·-·-', 'á':'·--·-','ç':'-·-··','ch':'----',
    'õ':'··--·', 'è':'·-··-','é':'··-··','ĝ':'--·-·',
    'ĥ':'-·--·', 'ĵ':'·---·','ñ':'--·--','ö':'---·',
    'ŝ':'···-·','þ':'·--··','ü':'··--',
}



var botao_morse = document.querySelector('#morse');


function gera_morse(evento){

var nome = document.querySelector('#senha').value;
var tela = document.querySelector('.criptografia');
evento.preventDefault();
var palavra = [];
var texto = '';
var quantidade = nome.length;
console.log(quantidade);

for(var i =0; i<nome.length;i++){
    palavra = nome.charAt(i);
    
    console.log(alfabeto[palavra]);
    texto += alfabeto[palavra];
    console.log(texto);
      

    }
    tela.innerHTML += '<p>'+texto+'</p>'; 
    
}

botao_morse.addEventListener('click',gera_morse);

}

        




  

      
    
   
  


 





