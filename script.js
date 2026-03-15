// Form Validation
function validateForm() {
    const form = document.getElementById('myForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    let valid = true;
    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    return valid;
}

// Product Filtering
function filterProducts() {
    const filter = document.getElementById('productFilter').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const text = product.textContent.toLowerCase();
        product.style.display = text.includes(filter) ? '' : 'none';
    });
}

// WhatsApp Integration
function sendMessage() {
    const message = encodeURIComponent('Hello! I am interested in your products.');
    const phone = '1234567890'; // Replace with the actual number
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// Smooth Scrolling
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Interactive Gallery
function openGallery(image) {
    const galleryOverlay = document.getElementById('galleryOverlay');
    galleryOverlay.style.display = 'block';
    galleryOverlay.querySelector('img').src = image.src;
}

function closeGallery() {
    document.getElementById('galleryOverlay').style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('myForm').addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault();
            alert('Please fill out all fields.');
        }
    });
    document.getElementById('productFilter').addEventListener('input', filterProducts);
});
