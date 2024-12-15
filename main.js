document.querySelector('#search-icon').addEventListener('click', function() {
    let search = document.querySelector('.search-box');
    search.classList.toggle('active');
});


document.querySelector('#search-icon').addEventListener('click', function() {
    let search = document.querySelector('.search-box');
    let query = document.querySelector('#search').value.toLowerCase().trim();

    if (query === 'cars' || 'Cars') {
        window.location.href = 'Cars.html';
    } else if (query === 'about') {
        window.location.href = 'About.html';
    } else if (query === 'login' || query === 'register') {
        window.location.href = 'form.html';
    } else {
        search.classList.toggle('active');
        alert('No results found for your search query.');
    }
});