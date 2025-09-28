const btnAddProfessor = document.getElementById('btn-add-professor');
const modalProfessor = document.getElementById('modal-professor');
const closeModal = document.getElementById('close-modal');
const formProfessor = document.getElementById('form-professor');

// Abrir modal//
btnAddProfessor.addEventListener('click', () => {
    modalProfessor.style.display = 'flex';
});

// Fechar modal
closeModal.addEventListener('click', () => {
    modalProfessor.style.display = 'none';
});

// Fechar modal clicando fora
window.addEventListener('click', (e) => {
if (e.target === modalProfessor) {
    modalProfessor.style.display = 'none';
 }

});
