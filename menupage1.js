// Get the menu element
const menu = document.getElementById('menu');
const cartSection = document.getElementById('section2');
// Get the cart items element
const cartItems = document.getElementById('cart-items');
const emptyCartMsg = document.getElementById('empty-cart-msg');
// Get the total element
const totalElement = document.getElementById('total');
// Get the checkout button
const checkoutButton = document.getElementById('checkout');

let total = 0;

// Function to handle the "Add to Cart" button click
function handleAddToCartClick(event) {
    const menuItem = event.target.parentNode;
    const itemName = menuItem.querySelector('.item-name').textContent;
    cartSection.scrollIntoView({ behavior: 'smooth' });
    const itemPrice = parseFloat(menuItem.querySelector('.item-price').textContent.replace('RM', ''));

    // Create a new list item for the cart
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <div class="cart-item-box">
        <div class="cart-item-details">
          <span class="cart-item-name">${itemName}</span>
          <span class="cart-item-price">RM${itemPrice.toFixed(2)}</span>
        </div>
        <button class="remove-from-cart">Remove</button>
      </div>
    `;

    // Append the new cart item to the cart
    cartItems.appendChild(cartItem);

    // Update the total
    total += itemPrice;
    totalElement.textContent = `Total: RM${total.toFixed(2)}`;

    if (cartItems.childElementCount === 0) {
      emptyCartMsg.style.display = 'block';
    } else {
      emptyCartMsg.style.display = 'none';
    }
}

// Function to handle the "Remove" button click
function handleRemoveFromCartClick(event) {
    const cartItem = event.target.parentNode.parentNode;
    const itemPrice = parseFloat(cartItem.querySelector('.cart-item-price').textContent.replace('RM', ''));

    // Remove the cart item from the cart
    cartItem.remove();

    // Update the total
    total -= itemPrice;
    totalElement.textContent = `Total: RM${total.toFixed(2)}`;

    if (cartItems.childElementCount === 0) {
      emptyCartMsg.style.display = 'block';
    } else {
      emptyCartMsg.style.display = 'none';
    }
}

// Function to handle the "Checkout" button click
function handleCheckoutClick() {
    // Reset the cart
    cartItems.innerHTML = '';
    total = 0;
    totalElement.textContent = 'Total: $0';

    window.location.href = 'https://forms.gle/Y5gLA5YqCBmUPMdo9';
}

// Add event listeners to "Add to Cart" buttons
const addToCartButtons = menu.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
    button.addEventListener('click', handleAddToCartClick);
});

// Add event listeners to "Remove" buttons
document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('remove-from-cart')) {
        handleRemoveFromCartClick(event);
    }
});

// Add event listener to "Checkout" button
checkoutButton.addEventListener('click', handleCheckoutClick);