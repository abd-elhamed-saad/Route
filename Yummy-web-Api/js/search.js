// ========== Search ==========
function displaySearchInputs() {
    let searchInputResult = `
    <div class="row py-4">
        <div class="col-md-6">
            <input type="text" onkeyup="getSearchByName(this.value)" class="form-control text-white bg-transparent" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input type="text" onkeyup="getSearchByFirstLetter(this.value)" class="form-control text-white bg-transparent" placeholder="Search By First Letter" maxlength="1">
        </div>
    </div>`;
    searchContainer.innerHTML = searchInputResult;
    dataRow.innerHTML = ``;
}

async function getSearchByName(searchQuery) {
    $(".inner-loading-screen").fadeIn(300);
    let searchByNameAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
    let searchByNameList = await searchByNameAPI.json();
    displaySearchByName_FirstLetter(searchByNameList);
}

async function getSearchByFirstLetter(searchQuery) {
    $(".inner-loading-screen").fadeIn(300);
    let searchByFirstLetterAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
    let searchByFirstLetterList = await searchByFirstLetterAPI.json();
    displaySearchByName_FirstLetter(searchByFirstLetterList);
}

function displaySearchByName_FirstLetter(searchQuery) {
    if (searchQuery.meals != null) {
        displayMealsByName(searchQuery.meals);
    }
    $(".inner-loading-screen").fadeOut(300);
}
