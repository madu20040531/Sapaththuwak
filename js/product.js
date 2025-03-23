// cart.js

document.addEventListener('DOMContentLoaded', function () {
    const addCartButtons = document.querySelectorAll('.add-cart');
    const cartItemCount = document.querySelector('.cart-item-count');

    let cartCount = 0;

    // Function to update the cart count
    function updateCartCount() {
        cartItemCount.textContent = cartCount;
        cartItemCount.style.visibility = cartCount > 0 ? 'visible' : 'hidden';
    }

    // Add event listeners to all "Add to Cart" buttons
    addCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            cartCount++;
            updateCartCount();
        });
    });
});