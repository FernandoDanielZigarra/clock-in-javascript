console.log("Script success!")

const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

const days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

let date = new Date()

let fix = function (elemet) {
    if (elemet < 10) {
        return `0${elemet}`
    } else {
        return elemet
    }
}



window.addEventListener('load', () => {
    let fullHour = `${fix(date.getHours())} : ${fix(date.getMinutes())} : ${fix(date.getSeconds())}`
    $('day').innerHTML = `Hoy es ${days[date.getDay()]} ${date.getDate()} `;
    $('month').innerHTML = `de ${months[date.getMonth()]} `;
    $('year').innerHTML = `de ${date.getFullYear()}` 
    $('hours').innerHTML = `${fix(date.getHours())} : `;
    $('minutes').innerHTML = `${fix(date.getMinutes())} : `;
    $('seconds').innerHTML = `${fix(date.getSeconds())}`;
    $('reflect').innerHTML = fullHour;
})
setInterval(() => {
    let date = new Date();
    let fullHour = `${fix(date.getHours())} : ${fix(date.getMinutes())} : ${fix(date.getSeconds())}`
    $('seconds').innerHTML = `${fix(date.getSeconds())} `;
    $('reflect').innerHTML = fullHour;
    
    if (date.getSeconds() == 0) {
        $('minutes').innerHTML = `${fix(date.getMinutes())} : `
    }
    if (date.getMinutes() == 0) {
        $('hours').innerHTML = `${fix(date.getHours())} : `;
    }
}, 1000);


