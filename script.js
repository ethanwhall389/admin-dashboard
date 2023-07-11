// Date Generator
const date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();

let datePara = document.querySelector('.date')

datePara.textContent = `${month}/${day}/${year}`;



// Color Mode
let colorModeBttn = document.querySelector('.color-mode');
let html = document.querySelector('html');
let colorSvgDiv = document.querySelector('.color-mode-svg');
let sunSvg = document.querySelector('.sun-svg')
let moonSvg = document.querySelector('.moon-svg')

    //default to light mode on page load
html.classList.add('light-mode');
colorSvgDiv.removeChild(moonSvg);

colorModeBttn.addEventListener('click', () => changeColor())

function changeColor() {
    if (html.classList == 'light-mode') {
        html.classList.remove('light-mode');
        html.classList.add('dark-mode');
        colorSvgDiv.removeChild(sunSvg);
        colorSvgDiv.appendChild(moonSvg);
    } else {
        html.classList.remove('dark-mode');
        html.classList.add('light-mode');
        colorSvgDiv.removeChild(moonSvg);
        colorSvgDiv.appendChild(sunSvg);
    }
}

