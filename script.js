window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
function toggleForm(event) {
    event.preventDefault(); // Stop the page from jumping
    const form = document.getElementById('form');

    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
        form.scrollIntoView({ behavior: 'smooth' }); // Scroll to the form
    } else {
        form.style.display = 'none';
    }
}