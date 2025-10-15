// Get references to input fields
var bookmarkName = document.getElementById('bookmarkName');
var bookmarkURL = document.getElementById('bookmarkURL');

// Get reference to submit button
var btnsubmit = document.getElementById('btnsubmit');
var modal = document.querySelector('#modal-body');
var closmodalbtn = document.querySelector('.close-modal');

// Initialize empty array to store bookmarks
var bookmarklist = [];

// Check if there are saved bookmarks in localStorage
if (localStorage.getItem('BookmarkSaved') !== null) {
    bookmarklist = JSON.parse(localStorage.getItem('BookmarkSaved'));
    display();
}

// Get references to input fields for validation
var validbookmarkName = document.querySelector('#bookmarkName');
var validbookmarkURL = document.querySelector('#bookmarkURL');

validbookmarkName.addEventListener('input', function () {
    var regex = /^(\w){3,}(\s*(\w){1,})*$/;

    var myname = validbookmarkName.value;
    if (regex.test(myname) == true) {
        bookmarkName.classList.remove('is-invalid');
        bookmarkName.classList.add('is-valid');
    } else {
        bookmarkName.classList.add('is-invalid');
    }
})

// Event listener for real-time URL validation
validbookmarkURL.addEventListener('input', function () {
    var regex = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/){1}(\w){2,}\.(\w){2,}(\/)?((\w){0,}(\/){1}(\w){1,})*$/;
    var myurl = validbookmarkURL.value;
    if (regex.test(myurl) == true) {
        console.log(true);
        bookmarkURL.classList.remove('is-invalid');
        bookmarkURL.classList.add('is-valid');
    } else {
        console.log(false);
        bookmarkURL.classList.add('is-invalid');
    }
})

// Event listener to close the validation modal
closmodalbtn.addEventListener('click', function () {
    modal.classList.remove('show');
})

btnsubmit.onclick = inputValidation;

/**
 * Validates input fields before submitting
 * Checks if both name and URL match their respective regex patterns
 * If valid: calls submit() function
 * If invalid: displays validation modal
 */
function inputValidation() {
    var nameregex = /^(\w){3,}(\s*(\w){1,})*$/;
    // Regex for URL: must start with http/https protocol
    var urlregex = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/){1}(\w){2,}\.(\w){2,}(\/)?((\w){0,}(\/){1}(\w){1,})*$/;
    var myname = validbookmarkName.value;
    var myurl = validbookmarkURL.value;
    if (urlregex.test(myurl) == true && nameregex.test(myname) == true) {
        submit();
    }
    else {
        modal.classList.add('show');
    }
}
/**
 * Submits a new bookmark
 * Creates bookmark object, adds to array, saves to localStorage
 * Then displays updated list and resets form
 */
function submit() {
    var bookmarks = {
        name: bookmarkName.value,
        url: bookmarkURL.value
    }
    // Add new bookmark to the array
    bookmarklist.push(bookmarks);
    // Save updated array to localStorage
    localStorage.setItem('BookmarkSaved', JSON.stringify(bookmarklist));
    display();
    reset();
}


/**
 * Displays all bookmarks in the table
 * Loops through bookmark list array and generates HTML table rows
 * Each row contains: index, name, visit button, and delete button
 */
function display() {
    var box = ``;
    // Loop through all bookmarks and create table rows
    for (var i = 0; i < bookmarklist.length; i++) {
        box = box +
            `<tr class="bg-light border border-top">
            <td class="p-2">${i + 1}</td>
            <td class="p-2">${bookmarklist[i].name}</td>
            <td class="p-2"><a href= ${ bookmarklist[i].url}  target="_blank"><button class="btn btn-visit"><i class="fa-solid fa-eye pe-2"></i>Visit</button></a></td>
            <td class="p-2"><a href="#"><button onclick="deletebookmark(${i})" class="btn btn-delete"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></a></td>
        </tr>`;
    }
    document.getElementById('tablebodycontent').innerHTML = box;
}

/**
 * Deletes a bookmark at the specified index
 * Removes from array, updates localStorage, and refreshes display
 * @param {number} index - The index of the bookmark to delete
 */
function deletebookmark(index) {
    bookmarklist.splice(index, 1);
    localStorage.setItem('BookmarkSaved', JSON.stringify(bookmarklist));
    display();
}

/**
 * Resets the input form
 * Clears input values and removes validation classes
 */
function reset() {
    bookmarkName.value = "";
    bookmarkURL.value = "";
    bookmarkURL.classList.remove('is-valid');
    bookmarkName.classList.remove('is-valid');

}





 