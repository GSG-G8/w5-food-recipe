const foodRecipe = document.querySelector(".precipe__image");
const precipeDetails = document.querySelector('.food-precipe');
const foodPrecieClose = document.querySelector('.food-precie__close');
const foodPrecipeImage = document.querySelector('.food-precipe__image');
const food = document.querySelector('.food');

const searchInput = document.querySelector(".search__input");
const searchBtn = document.querySelector(".search__btn");

document.addEventListener("click", e => {
  if (e.target.name == "foodPre") {
    foodPrecipeImage.src = e.target.src;
    precipeDetails.style.display = "flex";
    food.style.display = "none";
  }
});
foodPrecieClose.addEventListener('click', e=>{
food.style.display = "flex";
precipeDetails.style.display = "none"
})
