const date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();
console.log(year);

let datePara = document.querySelector('.date')

datePara.textContent = `${month}/${day}/${year}`;
