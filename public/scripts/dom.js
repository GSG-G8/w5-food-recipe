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

function createRecipeElement(obj) {
  const recipe = obj.recipe;
  
  const article = document.createElement("article");
  const img = document.createElement("img");
  const span = document.createElement("span");
  const nutrients = document.createElement("ul");

  article.className = "food__precipe";
  img.src = recipe.image;
  img.alt = "food__precipe";
  img.name = "foodPre";
  img.className = "precipe__image";
  span.textContent = recipe.label;
  span.className = "precipe__name";
  nutrients.className = "precipe__detials";

  ["FAT", "WATER", "PROCNT", "SUGAR", "ENERC_KCAL", "CHOCDF"]
    .map(e => recipe.totalNutrients[e])
    .forEach(item => {
      const el = document.createElement("div");
      const sp = document.createElement("span");
      sp.className = "details";
      sp.textContent = `${item.label}: ${Math.round(item.quantity*100)/100} ${item.unit}`;
      el.appendChild(sp);
      nutrients.appendChild(el);
  });

  article.appendChild(img);
  article.appendChild(span);
  article.appendChild(nutrients);

  return article;
}

function renderSearch(arr) {
  if (!Array.isArray(arr) || arr.length===0) return;
  
  food.textContent = '';
  arr.forEach(recipe => {
    food.appendChild(createRecipeElement(recipe));
  });
}

searchInput.oninput = () => {
  searchInput.style.borderColor = "#aaa";
  searchInput.style.backgroundColor = "#fff";
}