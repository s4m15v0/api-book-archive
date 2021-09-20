//books
const searchBook = () => {
    const searchTextInput = document.getElementById('input-field');
    const searchText = searchTextInput.value;
    searchTextInput.value = '';

    if (searchText === '') {
        let container = document.getElementById('books-cotainer');
        container.innerHTML = `<div class="py-3 bg-warning text-center mt-5 my-3 w-75">
        <h1> Error, something went wrong</h1>
    </div>`
    } else {

        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => showBooks(data.docs));
    }

}

//showing result 
const showBooks = (books) => {
    let container = document.getElementById('books-cotainer');
    document.getElementById('post-count').innerText = books.length;

    let html = '';
    books.forEach(book => {
        html += `
        <div class="col">
            <div class="card">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"><b>Title: </b> ${book.title}</h5>
                <h5 class="card-author"><b>Author: </b> ${book.author_name}</h5>
                <h5 class="card-author"><b>Publisher: </b> ${book.publisher}</h5>
                <h5 class="card-author"><b>First Publish: </b> ${book.first_publish_year}</h5>
            </div>
            </div>
      </div>
        `
        container.innerHTML = html;
    });

}
