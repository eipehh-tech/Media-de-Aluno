const alunos = [];

document
  .getElementById("alunoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome");
    const idade = document.getElementById("idade");
    const nota1 = document.getElementById("nota1");
    const nota2 = document.getElementById("nota2");
    const nota3 = document.getElementById("nota3");

    const aluno = {
      nome: nome.value,
      idade: idade.value,
      notas: [nota1.value, nota2.value, nota3.value],
    };

    alunos.push(aluno);

    atualizarListaDeAlunos();

    document.getElementById("alunoForm").reset();
  });

function calcularMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + parseFloat(nota), 0);
  return soma / notas.length;
}

function verificarAprovacao(aluno) {
  return calcularMedia(aluno.notas) >= 7;
}

function atualizarListaDeAlunos() {
  const lista = document.getElementById("listaAlunos");
  lista.innerHTML = "";

  alunos.forEach((aluno) => {
    const li = document.createElement("li");
    li.textContent = `${aluno.nome} | ${aluno.idade} anos | ${aluno.notas.join(
      ", "
    )} `;
    lista.appendChild(li);
  });
}

document.getElementById("calcular").addEventListener("click", function () {
  const lista = document.getElementById("listaAlunos");
  lista.innerHTML = "";

  alunos.forEach((aluno) => {
    const media = calcularMedia(aluno.notas);
    const status = verificarAprovacao(aluno) ? "✅ Aprovado" : "❌ Reprovado";

    const li = document.createElement("li");
    li.textContent = `${aluno.nome} - Média: ${media.toFixed(1)} - ${status}`;
    lista.appendChild(li);
  });
});
