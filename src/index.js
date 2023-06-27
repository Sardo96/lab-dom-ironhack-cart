// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const subtotalValue = price.innerHTML * quantity.value;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalValue;

  return subtotalValue; 
}

function calculateAll() {
  let products = document.getElementsByClassName('product');
  let productsArray = [...products];

  const allSubtotals = productsArray.map(element => {
    return updateSubtotal(element);
  });

  const totalValue = allSubtotals.reduce(function (accumulator, subtotal) {
    return accumulator + subtotal;
  }, 0);

  const total = document.querySelector('#total-value > span');
  total.innerHTML = totalValue.toFixed(2);

  return totalValue;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.parentNode.parentNode; 
  const cartBody = productRow.parentNode; 

  cartBody.removeChild(productRow); 
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newInputs = document.querySelectorAll('.create-product input')
  const nameValue = newInputs[0].value;
  const priceValue = Number(newInputs[1].value);
  console.log(nameValue);

  if (nameValue.trim() === '' || priceValue === 0) {
    return; 
  }

  newInputs[0].value = '';
  newInputs[1].value = '0';

  const newProduct = document.createElement("tr");
  newProduct.setAttribute("class", "product")
  const cart = document.querySelector('#cart tbody')
  cart.appendChild(newProduct)

  const newName = document.createElement("td");
  newName.setAttribute("class", "name")
  newName.innerHTML = nameValue
  newProduct.appendChild(newName);

  const newPrice = document.createElement("td");
  newPrice.setAttribute("class", "price")
  newPrice.innerHTML = "$"
  newProduct.appendChild(newPrice);

  const newPriceSpan = document.createElement("span");
  const fixedPriceValue = priceValue.toFixed(2);
  newPriceSpan.innerHTML = fixedPriceValue;
  newPrice.appendChild(newPriceSpan);

  const newQuantity = document.createElement("td");
  newQuantity.setAttribute("class", "quantity")
  newProduct.appendChild(newQuantity);

  const newQuantityInput = document.createElement("input");
  newQuantityInput.type = "number"
  newQuantityInput.min = 0
  newQuantityInput.value = 0;
  newQuantityInput.placeholder = "Quantity"
  newQuantity.appendChild(newQuantityInput);


  const newSubtotal = document.createElement("td");
  newSubtotal.setAttribute("class", "subtotal")
  newSubtotal.innerHTML = "$"
  newProduct.appendChild(newSubtotal);

  const newSubtotalSpan = document.createElement("span");
  newSubtotalSpan.innerHTML = 0
  newSubtotal.appendChild(newSubtotalSpan);

  const newAction = document.createElement("td");
  newAction.setAttribute("class", "action")
  newProduct.appendChild(newAction)

  const newRemoveBtn = document.createElement("button");
  newRemoveBtn.setAttribute("class", "btn btn-remove")
  newRemoveBtn.innerHTML = "Remove"
  newAction.appendChild(newRemoveBtn)
  newRemoveBtn.addEventListener('click', removeProduct);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);


  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
});
