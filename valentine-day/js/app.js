let noPerdonar = document.getElementById('no');
let perdonar = document.getElementById('si');
let titulo = document.getElementById('titulo');
let padd = 0; 
let cadena = '';
let frases = ['¿Por qué no?', 'Andale', '¿Segura?','Me lo merezco ):', 'Por favor', 'Yo te amo mucho, por favor','Yo todo lo doy', 'Piensa en nuestros hijos'];
let imagen = document.getElementById('imgAbrazo');

function no(){
    titulo.innerText = '¿Me perdonas?';
    imagen.src='/img/abrazo.gif';
    padd +=10;
    cadena = padd+'rem' ;
    console.log(cadena);
    perdonar.style.padding = cadena;
    noPerdonar.innerText = frases[Math.floor(Math.random()*8)];
}

function yes(){
    titulo.innerText = '¡Gracias! , TE AMO';
    perdonar.style.padding = '0';
    imagen.src = '/img/abrazo3.gif';
    padd = 0;
    noPerdonar.innerText = 'No';
}