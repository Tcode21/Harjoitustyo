
// Kaava jännite -------------------------------------------------------->


const inputvirta = document.querySelector('#input1');
const inputresistanssi = document.querySelector('#input2');
const inputvastaus = document.querySelector('#vastaus');

const laske = document.querySelector('#nappi1');



function muunna() {
    
    let virta = inputvirta.value;
    let resistanssi = inputresistanssi.value;

    let vastaus = virta * resistanssi;

    inputvastaus.textContent = vastaus;
}


laske.addEventListener('click', muunna);







const inputteho = document.querySelector('#input7');
const inputvirta4 = document.querySelector('#input8');
const inputvastaus4 = document.querySelector('#vastaus7');

const laske4 = document.querySelector('#nappi4');



function muunna4() {
    
    let teho = inputteho.value;
    let virta4 = inputvirta4.value;

    let vastaus4 = teho / virta4;

    inputvastaus4.textContent = vastaus4;
}


laske4.addEventListener('click', muunna4);








// kaava virta ------------------------------------------------------------->


const inputjännite = document.querySelector('#input3');
const inputvirta2 = document.querySelector('#input4');
const inputvastaus2 = document.querySelector('#vastaus3');

const laske2 = document.querySelector('#nappi2');




function muunna2() {
    
    let jännite = inputjännite.value;
    let virta2 = inputvirta2.value;

    let vastaus2 = jännite / virta2;

    inputvastaus2.textContent = vastaus2;
}


laske2.addEventListener('click', muunna2);





const inputteho2 = document.querySelector('#input9');
const inputjännite3 = document.querySelector('#input10');
const inputvastaus5 = document.querySelector('#vastaus9');

const laske5 = document.querySelector('#nappi5');




function muunna5() {
    
    let teho2 = inputteho2.value;
    let jännite3 = inputjännite3.value;

    let vastaus5 = teho2 / jännite3;

    inputvastaus5.textContent = vastaus5;
}


laske5.addEventListener('click', muunna5);






















// kaava teho ----------------------------------------------------------------->



const inputjännite2 = document.querySelector('#input5');
const inputvirta3 = document.querySelector('#input6');
const inputvastaus3 = document.querySelector('#vastaus5');

const laske3 = document.querySelector('#nappi3');




function muunna3() {
    
    let jännite2 = inputjännite2.value;
    let virta3 = inputvirta3.value;

    let vastaus3 = jännite2 * virta3;

    inputvastaus3.textContent = vastaus3;
}


laske3.addEventListener('click', muunna3);


// Kaava Resistanssi --------------------------------------------------------------->


const inputjännite4 = document.querySelector('#input11');
const inputvirta5 = document.querySelector('#input12');
const inputvastaus6 = document.querySelector('#vastaus11');

const laske6 = document.querySelector('#nappi6');




function muunna6() {
    
    let jännite4 = inputjännite4.value;
    let virta5 = inputvirta5.value;

    let vastaus6 = jännite4 / virta5;

    inputvastaus6.textContent = vastaus6;
}


laske6.addEventListener('click', muunna6);

















// Ääni ------------------------------------------------------>

var aani = document.getElementById("aani2");



function soita() {
  aani.play();
} 



