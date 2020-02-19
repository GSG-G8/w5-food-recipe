const precipeDetails = document.querySelector('.food-precipe');
const foodPrecieClose = document.querySelector('.food-precie__close');
const foodPrecipeImage = document.querySelector('.food-precipe__image');
const food = document.querySelector('.food');

const searchInput = document.querySelector('.search__input');
const searchBtn = document.querySelector('.search__btn');

let searchResults = [];

function showDetails() {
  food.style.display = "none";
  precipeDetails.style.display = "flex";
}

function hideDetails() {
  food.style.display = "flex";
  precipeDetails.style.display = "none"
}

foodPrecieClose.onclick = hideDetails;


function selectThis() {
  showDetails()
  const thisRecipe = searchResults[this.arrayIndex].recipe;
  foodPrecipeImage.src = thisRecipe.image;

  document.querySelector(".food__name").textContent = thisRecipe.label;
  const ingerdients = document.querySelector(".ingerdients__ingerden");
  ingerdients.textContent = "";
  thisRecipe.ingredientLines.forEach(line => {
    const el = document.createElement("li");
    el.textContent = line;
    ingerdients.appendChild(el);
  });

}

function createRecipeElement(obj, index) {
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
  img.arrayIndex = index;
  img.onclick = selectThis;
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
  
  searchResults = arr;
  food.textContent = '';
  arr.forEach((recipe, index) => {
    food.appendChild(createRecipeElement(recipe, index));
  });
}

searchInput.oninput = () => {
  searchInput.style.borderColor = "#aaa";
  searchInput.style.backgroundColor = "#fff";
}

function renderRecipe(obj) {
  foodPrecipeImage
}