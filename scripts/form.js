const currentYear = new Date().getFullYear();

document.querySelector("footer p").innerHTML = `©${currentYear} Brandon Chinchilla Guatemala`;

const lastModified = document.lastModified;

document.querySelectorAll("footer p")[1].innerHTML = `Last Modification: ${lastModified}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];
const select = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});


const form = document.getElementById('reviewForm');
form.addEventListener('submit', (e) => {
    if (!sel.value) {
        e.preventDefault();
  try {
    sessionStorage.setItem('justSubmittedReview','true');
  } catch (err) { console.error(err); }
  form.submit();
    }
});


