const btnAddAluno = document.getElementById('btn-add-aluno');
const modalAluno = document.getElementById('modal-aluno');
const closeModal = document.getElementById('close-modal-aluno');
const formAluno = document.getElementById('form-aluno');

// Abrir modal//
btnAddAluno.addEventListener('click', () => {
    modalAluno.style.display = 'flex';
});

// Fechar modal
closeModal.addEventListener('click', () => {
    modalAluno.style.display = 'none';
});

// Fechar modal clicando fora
window.addEventListener('click', (e) => {
if (e.target === modalAluno) {
    modalAluno.style.display = 'none';
 }

});
console.log(btnAddAluno, modalAluno, closeModal);