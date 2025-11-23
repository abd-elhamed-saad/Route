// ========== Ingredients ==========
async function getMealsByIngredients() {
    $(".inner-loading-screen").fadeIn(300);
    let mealsByIngredientsAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    let mealsByIngredientsList = await mealsByIngredientsAPI.json();
    mealsByIngredientsList = mealsByIngredientsList.meals.slice(0, 20);
    displayMealsByIngredients(mealsByIngredientsList);
    $(".inner-loading-screen").fadeOut(300);
}

function displayMealsByIngredients(mealsByIngredientsList) {
    searchContainer.innerHTML = ``;
    let result = ``;
    for (let i = 0; i < mealsByIngredientsList.length; i++) {
        result += `
        <div class="col-md-3">
            <div class="text-white text-center cursor-pointer" onclick="filterMealsByIngredients('${mealsByIngredientsList[i].strIngredient}')">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                <h2>${mealsByIngredientsList[i].strIngredient}</h2>
                <p>${mealsByIngredientsList[i].strDescription.slice(0, 100)}</p>
            </div>
        </div>`;
    }
    dataRow.innerHTML = result;
}

async function filterMealsByIngredients(ingredientName) {
    $(".inner-loading-screen").fadeIn(300);
    let filterByIngredientsAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`);
    let filterByIngredientsList = await filterByIngredientsAPI.json();
    filterByIngredientsList = filterByIngredientsList.meals.slice(0, 20);
    displayMealsByName(filterByIngredientsList);
    $(".inner-loading-screen").fadeOut(300);
}
