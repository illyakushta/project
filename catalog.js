let cart = []; // Array to store cart items

function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
}

function addToCart(title, description) {
    // Add the item to the cart array
    cart.push({ title, description });
    updateDropdown(); // Update the dropdown menu
    toggleDropdown(); // Show the dropdown menu
}

function updateDropdown() {
    const dropdownContent = document.getElementById('dropdown-content');
    dropdownContent.innerHTML = cart.map(item => `
        <li>Назва: ${item.title}<br>Опис: ${item.description}</li>
    `).join('');
}