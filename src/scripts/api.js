import data from '../DATA.json'

const { hitFoods, restaurants } = data;

const restaurantsCardGroup = document.querySelector('.explore .card-group');

const excerpDescription = (description) => (
  description.split(' ').slice(0, 25).join(' ')
);

restaurantsCardGroup.innerHTML = restaurants.map((restaurant) => (
  `<div id="${restaurant.id}" class="card">
    <img src="${restaurant.pictureId}" alt="${restaurant.name}">
    <div class="city"><h4>${restaurant.city}</h4></div>
    <div class="detail">
      <p class="rating">Rating : ${restaurant.rating}</p>
        <h3 class="restaurant-name">
          <a href="#">
            ${restaurant.name}
          </a>
        </h3>
      <p class="description">${excerpDescription(restaurant.description)} <a href="#" class="full-info">...Lihat Selengkapnya</a></p>
    </div>
  </div>`
)).join('');

const hitsCardGroup = document.querySelector('.hits .card-group');

hitsCardGroup.innerHTML = hitFoods.map((food) => (
  `<div id="${food.id}" class="card-hits">
  <a href="#" id="" class="card-hits">
    <img src="${food.picture}" alt="${food.name}">
    <div class="detail">
      <h3 class="restaurant-name">${food.name}</h3>
    </div>
  </a>
  </div>`
)).join('');

