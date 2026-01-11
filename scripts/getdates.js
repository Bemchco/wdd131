const current_year = document.querySelector("#currentyear");

const date = new Date();

current_year.innerHTML = `&copy;<span>${date.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = 'Last Modification: '+ document.lastModified;