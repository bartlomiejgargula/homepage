const name = 'Bartek';
const age = 28;

function helloWorld (){
    console.log('witaj świecie');
}
const heading = document.querySelector('.header__title--js');

heading.innerHTML = `Strona robocza kursu WTF Co ten frontend`


function greet(age, name) {
    console.log(
        `Cześć! Jestem ${name} i mam ${age} lat. To jest moja strona z notatkami ze szkolenia WTF: Co ten frontend.`)
    }

greet (age, name)


function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content
}

createContent('.week-summary__subheading--jss', 'Witam wszystkich')
