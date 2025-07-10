const currentYear = new Date().getFullYear();

document.querySelector("footer p").innerHTML = `©${currentYear} Brandon Chinchilla Guatemala`;

const lastModified = document.lastModified;

document.querySelectorAll("footer p")[1].innerHTML = `Last Modification: ${lastModified}`;