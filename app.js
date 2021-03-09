const books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
book.textContent += ' (Book title)';
});

const bookList = document.querySelector('#book-list');
bookList.innerHTML = '<h2>Grāmatas un citas grāmatas...</h2>';
bookList.innerHTML += '<p>Šādi jūs pievienojat HTML saturu</p>';