
const hamButton = document.querySelector('#menu');
const nav = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
    
    if (hamButton.classList.contains('open')) {
        hamButton.textContent = 'X';
    } else {
        hamButton.textContent = '☰';
    }
});


const yearSpan = document.querySelector('#currentyear');
yearSpan.textContent = new Date().getFullYear();

const lastModifiedPara = document.querySelector('#lastModified');
lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  
  {
    templeName: "Buenos Aires Argentina",
    location: "Ciudad Evita, Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 30659,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
  },
  {
    templeName: "Córdoba Argentina",
    location: "Córdoba, Argentina",
    dedicated: "2015, May, 17",
    area: 34369,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093-main.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-75244-main.jpg"
  }
  
];

const container = document.querySelector(".res-grid");
const filterTitle = document.querySelector("#filter-title");

function createTempleCard(filteredTemples) {
  container.innerHTML = ""; 

  filteredTemples.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
      <p><span class="label">Size:</span> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
    `;

    container.appendChild(card);
  });

    nav.classList.remove("open");
    hamButton.classList.remove("open");
    hamButton.textContent = "☰";
}

createTempleCard(temples);


document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  filterTitle.textContent = "Home";
  createTempleCard(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
  e.preventDefault();
  filterTitle.textContent = "Old";
  const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
  createTempleCard(oldTemples);
});

document.querySelector("#new").addEventListener("click", (e) => {
  e.preventDefault();
  filterTitle.textContent = "New";
  const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
  createTempleCard(newTemples);
});

document.querySelector("#large").addEventListener("click", (e) => {
  e.preventDefault();
  filterTitle.textContent = "Large";
  const largeTemples = temples.filter(temple => temple.area > 90000);
  createTempleCard(largeTemples);
});

document.querySelector("#small").addEventListener("click", (e) => {
  e.preventDefault();
  filterTitle.textContent = "Small";
  const smallTemples = temples.filter(temple => temple.area < 10000);
  createTempleCard(smallTemples);
});