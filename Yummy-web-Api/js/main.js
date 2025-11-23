// ========== Global Variables ==========
let mealsByNameList = [];
let dataRow = document.getElementById('dataRow');
let searchContainer = document.getElementById('searchContainer');

// ========== Page Load - Initialize ==========
$(document).ready(() => {
    getSearchByName("").then(() => {
        $(".loading-screen").fadeOut(500);
        $("body").css("overflow", "auto");
    });
});

// ========== Default Page - Load Initial Meals ==========
getMealsByName();
