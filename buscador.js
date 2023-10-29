document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const books = document.querySelectorAll('.card'); // Cambia la clase a '.card'

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();

        books.forEach(function (book) { // Cambia 'game' a 'book'
            const titleElement = book.querySelector('.card-title'); // Cambia '.card-title'
            if (!titleElement) {
                // Si no se encuentra un título en el libro, omitirlo
                return;
            }
            const title = titleElement.textContent.trim().toLowerCase();
            const shouldShow = title.includes(searchTerm);

            if (shouldShow) {
                book.style.display = 'block'; // Cambia display a una clase de CSS
            } else {
                book.style.display = 'none'; // Cambia display a una clase de CSS
            }
        });
    });
});


