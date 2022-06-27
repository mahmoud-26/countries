let searchInput = document.querySelector(".search-input");
let searchBtn = document.querySelector(".search-btn");
let flag = document.querySelector(".flag");
let countryName = document.querySelector(".name");
let population = document.querySelector(".population");
let capital = document.querySelector(".capital");
let region = document.querySelector(".region");
let area = document.querySelector(".area");
let car = document.querySelector(".car");
let map = document.querySelector(".map");
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");
let root = document.querySelector(":root");
window.onload = () => {
  searchInput.value = "Egypt";
  getCountry("Egypt");
}

function getCountry(name) {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
  .then(res => res.json())
  .then(result => {
    flag.src = result[0].flags.svg;
    countryName.innerHTML = result[0].name.common;
    population.innerHTML = `<strong>Population: </strong>${result[0].population.toLocaleString()}`;
    capital.innerHTML = `<strong>Capital: </strong>${result[0].capital[0]}`;
    region.innerHTML = `<strong>Region: </strong>${result[0].region}`;
    area.innerHTML = `<strong>Area: </strong>${result[0].area.toLocaleString()} km<sup>2</sup>`;
    car.innerHTML = `<strong>Car: </strong>${result[0].car.side}`;
    map.innerHTML = `<strong>Map: </strong><a href=${result[0].maps.googleMaps}>Google Maps <ion-icon name="open-outline"></ion-icon></a>`;
  });
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getCountry(searchInput.value);
});

searchBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  getCountry(searchInput.value);
});

moon.addEventListener("click", () => {
  moon.style.display = "none";
  sun.style.display = "block";
  root.style.setProperty("--Blue", "skyblue");
  root.style.setProperty("--White", "hsl(207, 26%, 17%)");
  root.style.setProperty("--Shadow", "hsl(209, 4%, 12%)");
  root.style.setProperty("--Dark-Gray", "hsl(0, 0%, 90%)");
  root.style.setProperty("--Dark-Blue", "hsl(209, 0%, 44%)");
  root.style.setProperty("--Very-Dark-Blue", "hsl(0, 0%, 100%)");
  root.style.setProperty("--Very-Light-Gray", "hsl(207, 26%, 17%)");
});

sun.addEventListener("click", () => {
  moon.style.display = "block";
  sun.style.display = "none";
  root.style.setProperty("--Blue", "blue");
  root.style.setProperty("--White", "hsl(0, 0%, 100%)");
  root.style.setProperty("--Shadow", "hsl(0, 0%, 90%)");
  root.style.setProperty("--Dark-Gray", "hsl(0, 0%, 52%)");
  root.style.setProperty("--Dark-Blue", "hsl(209, 23%, 22%)");
  root.style.setProperty("--Very-Dark-Blue", "hsl(200, 15%, 8%)");
  root.style.setProperty("--Very-Light-Gray", "hsl(0, 0%, 98%)");
});
