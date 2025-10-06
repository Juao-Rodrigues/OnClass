const btnAddQrcode = document.getElementById('btn-add-qrcode');
const modalQrcode = document.getElementById('modal-qrcode');
const closeModal = document.getElementById('close-modal');
const formQrcode = document.getElementById('form-qrcode');

// Abrir modal//
btnAddQrcode.addEventListener('click', () => {
    modalQrcode.style.display = 'flex';
});

// Fechar modal
closeModal.addEventListener('click', () => {
    modalQrcode.style.display = 'none';
});

// Fechar modal clicando fora
window.addEventListener('click', (e) => {
if (e.target === modalQrcode) {
    modalQrcode.style.display = 'none';
 }

});

const tabela = document.querySelector("#tabelaHorarios tbody");
const botaoAdicionar = document.querySelector("#adicionarHorario");

// Dados simulados (poderia vir de uma API futuramente)
const horarios = [
  { dia: "Segunda-feira", horario: "08:00 - 10:00", curso: "ADS", turma: "A1", professor: "Nina" },
  { dia: "Terça-feira", horario: "10:00 - 12:00", curso: "Eng. Software", turma: "B2", professor: "Lili" },
];

// Função para renderizar tabela
function renderTabela() {
  tabela.innerHTML = "";
  horarios.forEach((h, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${h.dia}</td>
      <td>${h.horario}</td>
      <td>${h.curso}</td>
      <td>${h.turma}</td>
      <td>${h.professor}</td>
    `;
    tabela.appendChild(row);
  });
}

botaoAdicionar.addEventListener("click", () => {
  const novo = {
    dia: prompt("Dia da semana:"),
    horario: prompt("Horário:"),
    curso: prompt("Curso:"),
    turma: prompt("Turma:"),
    professor: prompt("Professor:")
  };
  if (novo.dia && novo.horario) {
    horarios.push(novo);
    renderTabela();
  }
});

renderTabela();
