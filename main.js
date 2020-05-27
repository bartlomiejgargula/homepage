const name = 'Bartek';
const age = 28;

function helloWorld (){
    console.log('witaj świecie');
}


function greet(age, name) {
    console.log(
        `Cześć! Jestem ${name} i mam ${age} lat. To jest moja strona z notatkami ze szkolenia WTF: Co ten frontend.`)
    }

greet (age, name)



const hamburger = document.querySelector(`.hamburger--js`);

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})