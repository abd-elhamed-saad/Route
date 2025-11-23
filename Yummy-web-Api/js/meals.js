// ========== Get Meals by Name ==========
async function getMealsByName() {
    let mealsByNameAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    let mealsByNameList = await mealsByNameAPI.json();
    console.log(mealsByNameList);
    displayMealsByName(mealsByNameList.meals);
}

// Display meals in grid
function displayMealsByName(mealsByNameList) {
    let result = ``;
    for (let i = 0; i < mealsByNameList.length; i++) {
        result += `
        <div class="col-md-3">
            <div class="img-card position-relative" onclick="getMealsById(${mealsByNameList[i].idMeal})">
                <img src="${mealsByNameList[i].strMealThumb}" alt="${mealsByNameList[i].strMeal}" class="border border-0 rounded-2">
                <div class="img-overlay position-absolute bg-white bg-opacity-75 border border-0 rounded-2 overflow-hidden">
                    <h2 class="meal-name d-flex align-items-center h-100">${mealsByNameList[i].strMeal}</h2>
                </div>
            </div>
        </div>`;
    }
    dataRow.innerHTML = result;
}

// ========== Get Meal Details by ID ==========
async function getMealsById(idMeal) {
    $(".inner-loading-screen").fadeIn(300);
    let mealsByIdAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    let mealsByIdList = await mealsByIdAPI.json();
    displayMealsById(mealsByIdList);
    $(".inner-loading-screen").fadeOut(300);
    console.log(idMeal, 'id');
}

// Display meal details
function displayMealsById(mealsByIdList) {
    searchContainer.innerHTML = ``;

    // Process tags
    let tags = mealsByIdList.meals[0].strTags;
    let resultTags = ``;
    if (tags != null) {
        let arrTags = tags.split(',');
        for (let i = 0; i < arrTags.length; i++) {
            resultTags += `<li class="border border-0 rounded-2 bg-danger-subtle text-danger-emphasis p-2">${arrTags[i]}</li>`;
        }
    }

    // Process recipes (ingredients + measures)
    let resultRecipes = ``;
    let ingredientsArr = [];
    let measuresArr = [];
    let recipesArr = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = `strIngredient${i}`;
        const measure = `strMeasure${i}`;
        const ingredients = mealsByIdList.meals[0][ingredient];
        const measures = mealsByIdList.meals[0][measure];

        if (ingredients !== "" && ingredients !== null) {
            console.log(measures, ' ', ingredients, ' ', i);
            ingredientsArr.push(ingredients);
            measuresArr.push(measures);
        }
    }

    for (let i = 0; i < measuresArr.length; i++) {
        const measuresArray = measuresArr[i];
        const ingredientsArray = ingredientsArr[i];
        recipesArr.push(`${measuresArray} ${ingredientsArray}`);
        resultRecipes += `<li class="border border-0 rounded-2 bg-info-subtle text-info-emphasis p-2">${recipesArr[i]}</li>`;
    }

    // Build HTML
    let result = `
        <div class="col-md-3">
            <div class="meal-caption">
                <img src="${mealsByIdList.meals[0].strMealThumb}" alt="${mealsByIdList.meals[0].strMeal}" class="border border-0 rounded-2">
                <h1 class="text-white">${mealsByIdList.meals[0].strMeal}</h1>
            </div>
        </div>
        <div class="col-md-9">
            <div class="meal-info text-white">
                <h2>Instructions</h2>
                <p class="mb-2">${mealsByIdList.meals[0].strInstructions}</p>
                <h2 class="mb-2">Area : ${mealsByIdList.meals[0].strArea}</h2>
                <h2 class="mb-2">Category : ${mealsByIdList.meals[0].strCategory}</h2>
                <div class="recipes mb-2">
                    <h2 class="mb-2">Recipes :</h2>
                    <ul class="d-flex flex-wrap gap-2">${resultRecipes}</ul>
                </div>
                <div class="tags mb-4">
                    <h2 class="mb-2">Tags :</h2>
                    <ul class="d-flex flex-wrap gap-2">${resultTags}</ul>
                </div>
                <ul class="d-flex flex-wrap gap-2">
                    <li class="btn btn-success p-2"><a href="${mealsByIdList.meals[0].strSource}" target="_blank">Source</a></li>
                    <li class="btn btn-danger p-2"><a href="${mealsByIdList.meals[0].strYoutube}" target="_blank">Youtube</a></li>
                </ul>
            </div>
        </div>`;
    dataRow.innerHTML = result;
}
