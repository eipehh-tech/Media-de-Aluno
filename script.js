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
