// ========== Area ==========
async function getMealsByArea() {
    $(".inner-loading-screen").fadeIn(300);
    let mealsByAreaAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    let mealsByAreaList = await mealsByAreaAPI.json();
    displayMealsByArea(mealsByAreaList.meals);
    $(".inner-loading-screen").fadeOut(300);
}

function displayMealsByArea(mealsByAreaList) {
    searchContainer.innerHTML = ``;
    let result = ``;
    for (let i = 0; i < mealsByAreaList.length; i++) {
        result += `
        <div class="col-md-3">
            <div class="text-white text-center cursor-pointer" onclick="filterMealsByArea('${mealsByAreaList[i].strArea}')">
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                <h2>${mealsByAreaList[i].strArea}</h2>
            </div>
        </div>`;
    }
    dataRow.innerHTML = result;
}

async function filterMealsByArea(areaName) {
    $(".inner-loading-screen").fadeIn(300);
    let filterByAreaAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`);
    let filterByAreaList = await filterByAreaAPI.json();
    filterByAreaList = filterByAreaList.meals.slice(0, 20);
    displayMealsByName(filterByAreaList);
    $(".inner-loading-screen").fadeOut(300);
}
