// ========== Categories ==========
async function getMealsByCategories() {
    $(".inner-loading-screen").fadeIn(300);
    let mealsByCategoryAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    let mealsByCategoryList = await mealsByCategoryAPI.json();
    displayMealsByCategory(mealsByCategoryList.categories);
    $(".inner-loading-screen").fadeOut(300);
}

function displayMealsByCategory(mealsByCategoryList) {
    searchContainer.innerHTML = ``;
    let result = ``;
    for (let i = 0; i < mealsByCategoryList.length; i++) {
        result += `
        <div class="col-md-3">
            <div class="img-card position-relative" onclick="filterMealsByCategory('${mealsByCategoryList[i].strCategory}')">
                <img src="${mealsByCategoryList[i].strCategoryThumb}" alt="${mealsByCategoryList[i].strCategory}" class="border border-0 rounded-2">
                <div class="img-overlay position-absolute text-center bg-white bg-opacity-75 border border-0 rounded-2 overflow-hidden">
                    <h2>${mealsByCategoryList[i].strCategory}</h2>
                    <p>${mealsByCategoryList[i].strCategoryDescription}</p>
                </div>
            </div>
        </div>`;
    }
    dataRow.innerHTML = result;
}

async function filterMealsByCategory(categoryName) {
    $(".inner-loading-screen").fadeIn(300);
    let filterByCategoryAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName.trim()}`);
    let filterByCategoryList = await filterByCategoryAPI.json();
    filterByCategoryList = filterByCategoryList.meals.slice(0, 20);
    displayMealsByName(filterByCategoryList);
    $(".inner-loading-screen").fadeOut(300);
}
