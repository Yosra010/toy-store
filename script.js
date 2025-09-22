const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let total = 0;

addToCartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const name = card.querySelector('.card-title').textContent;
    const price = parseFloat(card.querySelector('.card-text').textContent.replace('$',''));
    total += price;

    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between';
    li.textContent = name;
    const span = document.createElement('span');
    span.textContent = '$' + price;
    li.appendChild(span);

    cartItems.appendChild(li);
    cartTotal.textContent = total.toFixed(2);
  });
});
