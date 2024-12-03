// Adiciona evento ao botão de limpar histórico
document.getElementById("btnLimparHistorico").addEventListener("click", function () {
  const listaHistorico = document.getElementById("listaHistorico");
  listaHistorico.innerHTML = ""; // Limpa todos os itens do histórico
  alert("Histórico de médias foi limpo!");
});

// Função para calcular a média
function calcularMedia() {
  const nome = document.getElementById("nome").value;
  const disciplina = document.getElementById("disciplina").value;
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  // Verifica se todos os campos foram preenchidos corretamente
  if (!nome || !disciplina || isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // Calcula a média
  const media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2);

  // Determina o status do aluno
  const status = media >= 70 ? "Aprovado 🎉" : "Reprovado ❌";
  const resultado = document.getElementById("resultado");

  // Adiciona classes para animar o feedback
  if (media >= 7) {
    resultado.classList.add("aprovado");
    resultado.classList.remove("reprovado");
  } else {
    resultado.classList.add("reprovado");
    resultado.classList.remove("aprovado");
  }

  // Exibe o resultado
  resultado.textContent = `A média de ${nome} em ${disciplina} é: ${media} - ${status}`;

  // Adiciona o resultado ao histórico
  const listaHistorico = document.getElementById("listaHistorico");
  const itemHistorico = document.createElement("li");
  itemHistorico.textContent = `${nome} - ${disciplina}: Média ${media} - ${status}`;
  listaHistorico.appendChild(itemHistorico);
}

// Função para limpar o formulário
function limparFormulario() {
  const resultado = document.getElementById("resultado");
  resultado.textContent = "";
  resultado.classList.remove("aprovado", "reprovado");
}
