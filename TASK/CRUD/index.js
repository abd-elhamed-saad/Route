//^selectors
//to get the input fields from html
var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productImageInput = document.getElementById("productImage");
var productDiscriptionInput = document.getElementById("productDiscription");

//to get button from html
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");

//^storing data
//to store the products
var productList = [];

//check if there is data in local storage restore and display them
if (localStorage.getItem("allProducts")) {
  productList = JSON.parse(localStorage.getItem("allProducts"));
  displayProducts(productList);
}

//^add==========================
function addProuduct() {
  console.log();

  //to get the input from the user
  if (
    isInputValid(productRegex.nameRegex, productNameInput) &&
    isInputValid(productRegex.priceRegex, productPriceInput) &&
    isInputValid(productRegex.categoryRegex, productCategoryInput) &&
    isInputValid(productRegex.discriptionRegex, productDiscriptionInput) &&
    isImageValid()
  ) {
    var prouduct = {
      name: productNameInput.value,
      price: productPriceInput.value,
      category: productCategoryInput.value,
      discription: productDiscriptionInput.value,
      //handling the image input
      image:
        productImageInput.files.length > 0
          ? productImageInput.files[0].name
          : "1.jpg", //default image
    };
    //to push the product to the list
    productList.push(prouduct);

    //to display the product in the console
    console.log(productList);
    //save data to local storage
    localStorage.setItem("allProducts", JSON.stringify(productList));

    //to display the products
    displayProducts(productList);

    //to clear the input fields
    resetProuduct();
    //to show a success message
    Swal.fire({
      icon: "success",
      title: "Product Added!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill all fields correctly!",
    });
  }
}

//^reset==========================
//to clear the input fields
function resetProuduct() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDiscriptionInput.value = "";
  productImageInput.value = "";
  //to remove the validation classes
  productNameInput.classList.remove("is-valid", "is-invalid");
  productPriceInput.classList.remove("is-valid", "is-invalid");
  productCategoryInput.classList.remove("is-valid", "is-invalid");
  productDiscriptionInput.classList.remove("is-valid", "is-invalid");
  productImageInput.classList.remove("is-valid", "is-invalid");
}

//^display==========================
function displayProducts(targetElement) {
  var productsContainer = "";
  for (var i = 0; i < targetElement.length; i++) {
    productsContainer += `  <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card">
                        <div>
                            <img src="images/${
                              //to set the image of the product
                              targetElement[i].image
                            }" class="card-img-top" alt="image">
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">${targetElement[i].name}</h5>
                                <p class="card-text">${
                                  targetElement[i].discription
                                }
                                </p>
                                <h4 class="h6"><span class="fw-bold">category: </span> ${
                                  targetElement[i].category
                                }</h4>
                                <h5 class="h6"><span class="fw-bold">price: </span>${
                                  targetElement[i].price
                                } EGP</h5>
                        </div>
                        <div class="card-footer">
                            <button onclick="setDataToUpdate(${
                              //to update the broduct while searching
                              targetElement.length < productList.length
                                ? targetElement[i].oldIndex
                                : i
                            })" class="btn btn-warning text-light me-2">update</button>
                            <button onclick="deleteProudcts(${
                              //to delete the broduct while searching
                              targetElement.length < productList.length
                                ? targetElement[i].oldIndex
                                : i
                            })" class="btn btn-danger text-light">Delete</button>
                        </div>
                    </div>
                </div>`;
  }
  document.getElementById("rowProducts").innerHTML = productsContainer;
}

//^delete==========================
function deleteProudcts(index) {
  //to remove the product from the list
  productList.splice(index, 1);

  //to save the changes to the local storage
  localStorage.setItem("allProducts", JSON.stringify(productList));

  displayProducts(productList);
}

//^update==========================
var ubdateadIndex;
//to update the product
function setDataToUpdate(index) {
  ubdateadIndex = index;

  //to set the input fields to the product data
  productNameInput.value = productList[index].name;
  productPriceInput.value = productList[index].price;
  productCategoryInput.value = productList[index].category;
  productDiscriptionInput.value = productList[index].discription;

  //to set the update button to be visible by classList
  addBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");
}
function updateProudcts() {
  //to change the data of the brouct
  productList[ubdateadIndex].name = productNameInput.value;
  productList[ubdateadIndex].price = productPriceInput.value;
  productList[ubdateadIndex].category = productCategoryInput.value;
  productList[ubdateadIndex].discription = productDiscriptionInput.value;

  //handling update of the image
  if (productImageInput.files.length > 0) {
    productList[ubdateadIndex].image = productImageInput.files[0].name;
  }

  //to switch back buttons
  updateBtn.classList.add("d-none");
  addBtn.classList.remove("d-none");

  //save data to local storage after updating
  localStorage.setItem("allProducts", JSON.stringify(productList));

  //to display the products
  displayProducts(productList);

  //to clear the input fields
  resetProuduct();
}

//^search==========================
function searchProducts(searchvalue) {
  //aray to store the filtered products
  var filteredProducts = [];

  for (var i = 0; i < productList.length; i++) {
    //to check if the product name includes the search value
    if (productList[i].name.toLowerCase().includes(searchvalue.toLowerCase())) {
      //to store
      productList[i].oldIndex = i;

      //to push the product to the filtered products array
      filteredProducts.push(productList[i]);

      // to display the filtered products
      displayProducts(filteredProducts);
    }
  }
}

//^validation========================

var productRegex = {
  nameRegex: /^[A-Z][\sA-Za-z0-9]{2,}$/,
  priceRegex: /^[1-9][0-9]{1,6}$/,
  categoryRegex: /^(tv|phone|laptop|printers|accessories)$/,
  discriptionRegex: /^[\sA-Za-z0-9].{2,}$/,
};

function isInputValid(regex, productInput) {
  // to check if the product name is valid
  if (regex.test(productInput.value)) {
    //to add the valid class to the input field
    productInput.classList.add("is-valid");
    productInput.classList.remove("is-invalid");

    //error message
    productInput.nextElementSibling.classList.replace("d-none", "d-block");
    productInput.nextElementSibling.classList.replace("d-block", "d-none");

    return true;
  } else {
    productInput.classList.add("is-invalid");
    productInput.classList.remove("is-valid");

    //error message
    productInput.nextElementSibling.classList.replace("d-block", "d-none");
    productInput.nextElementSibling.classList.replace("d-none", "d-block");

    return false;
  }
}

//image validation

function isImageValid() {
  if (productImageInput.files.length > 0) {
    productImageInput.classList.add("is-valid");
    productImageInput.classList.remove("is-invalid");

    productImageInput.nextElementSibling.classList.replace("d-none", "d-block");
    productImageInput.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  } else {
    productImageInput.classList.add("is-invalid");
    productImageInput.classList.remove("is-valid");

    productImageInput.nextElementSibling.classList.replace("d-block", "d-none");
    productImageInput.nextElementSibling.classList.replace("d-none", "d-block");
    return false;
  }
}
