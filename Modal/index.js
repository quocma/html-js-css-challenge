const modal = document.querySelector('.modal');
const actionButton = document.querySelector('.action-btn')

const hanldeOpenModal = () => {
    modal.classList.add('show');
    actionButton.style.display = 'none';
}

const handleCloseModal = () => {
    modal.classList.remove('show');
    actionButton.style.display = 'block';
}