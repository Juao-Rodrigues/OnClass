document.addEventListener('DOMContentLoaded', () => {
  const scheduleGrid = document.getElementById('schedule-grid');
  const btnFiltrar = document.getElementById('btn-filtrar');
  const btnAddProfessor = document.getElementById('btn-add-professor');
  const modalProfessor = document.getElementById('modal-professor');
  const closeModal = document.getElementById('close-modal');
  const formProfessor = document.getElementById('form-professor');

  const API_URL = 'http://localhost:3000/horarios'; // Troque para a sua API real
  const API_PROFESSORES = 'http://localhost:3000/professores'; // API para cadastro

  // Função para carregar os horários
  async function carregarHorarios(filtros = {}) {
    try {
      const queryParams = new URLSearchParams(filtros).toString();
      const url = queryParams ? `${API_URL}?${queryParams}` : API_URL;

      const response = await fetch(url);
      if (!response.ok) throw new Error('Erro ao buscar os dados da API');

      const data = await response.json();
      renderSchedule(data);
    } catch (error) {
      console.error('Erro ao carregar horários:', error);
    }
  }

  // Renderiza a grade
  function renderSchedule(data) {
    scheduleGrid.innerHTML = ''; // limpa grade

    data.forEach(row => {
      // Coluna de horário
      const timeCell = document.createElement('div');
      timeCell.classList.add('time-slot');
      timeCell.textContent = row.time;
      scheduleGrid.appendChild(timeCell);

      // Colunas dos dias
      ["segunda", "terca", "quarta", "quinta", "sexta"].forEach(day => {
        const classCell = document.createElement('div');
        classCell.classList.add('class-slot');
        classCell.textContent = row[day] || "";
        scheduleGrid.appendChild(classCell);
      });
    });
  }

  // Evento do botão Filtrar
  btnFiltrar.addEventListener('click', () => {
    const filtros = {
      docente: document.getElementById('select-docente').value,
      curso: document.getElementById('select-curso').value,
      turno: document.getElementById('select-turno').value,
      semestre: document.getElementById('select-semestre').value
    };
    carregarHorarios(filtros);
  });

  // Carregar horários ao abrir a página
  carregarHorarios();

  // Abrir modal
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

  // Salvar professor
  formProfessor.addEventListener('submit', async (e) => {
    e.preventDefault();

    const novoProfessor = {
      nome: document.getElementById('nome').value,
      matricula: document.getElementById('matricula').value,
      disciplina: document.getElementById('disciplina').value,
      curso: document.getElementById('curso').value,
      turma: document.getElementById('turma').value,
      turno: document.getElementById('turno').value,
      semestre: document.getElementById('semestre').value,
      diaSemana: document.getElementById('diaSemana').value,
      horario: document.getElementById('horario').value


    };

    try {
      const response = await fetch(API_PROFESSORES, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoProfessor)
      });

      if (!response.ok) throw new Error('Erro ao cadastrar professor');

      alert('Professor cadastrado com sucesso!');
      formProfessor.reset();
      modalProfessor.style.display = 'none';
    } catch (error) {
      console.error('Erro ao cadastrar professor:', error);
      alert('Erro ao cadastrar professor');
    }
  });
});
