const searchBtn = document.querySelector('.searchbox__icon');
const searchInput = document.querySelector('.searchbox__input');
const searchInputEl = document.querySelector('.searchbox__input > input');

function toggleSearchInput () {
    searchInput.classList.toggle('show');
    searchInputEl.focus();
}

searchBtn.addEventListener('click', toggleSearchInput)