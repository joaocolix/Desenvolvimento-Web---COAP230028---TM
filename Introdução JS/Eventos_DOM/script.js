function paginaCarregada() {
  alert("A página foi carregada!");
}

function clicou() {
  alert("Você clicou no botão!");

  let titulo = document.getElementById("titulo");
  titulo.textContent = "Evento onclick executado";
}

function duploClique() {
  let titulo = document.getElementById("titulo");
  titulo.textContent = "Você deu dois cliques!";
  titulo.style.color = "orange";
}

function mouseEntrou() {
  let area = document.getElementById("areaMouse");

  area.textContent = "Mouse dentro do elemento";
  area.style.backgroundColor = "yellow";
}

function mouseSaiu() {
  let area = document.getElementById("areaMouse");

  area.textContent = "Mouse saiu do elemento";
  area.style.backgroundColor = "lightgray";
}

function digitando() {
  let nome = document.getElementById("nome").value;
  let resultado = document.getElementById("resultadoNome");

  resultado.textContent = "Você está digitando: " + nome;
}

function alterarCor() {
  let corEscolhida = document.getElementById("cor").value;
  let titulo = document.getElementById("titulo");

  titulo.style.color = corEscolhida;
}

function alterarTexto() {
  let texto = document.getElementById("texto");

  texto.textContent = "O conteúdo foi alterado com textContent.";
}

function alterarEstilo() {
  let paragrafo = document.getElementById("paragrafoEstilo");

  paragrafo.style.color = "red";
  paragrafo.style.backgroundColor = "yellow";
  paragrafo.style.fontSize = "30px";
  paragrafo.style.padding = "10px";
}

function usarQuerySelector() {
  let mensagem = document.querySelector(".mensagem");

  mensagem.textContent = "Este elemento foi selecionado com querySelector.";
  mensagem.style.color = "blue";
}

function criarItem() {
  let lista = document.getElementById("lista");

  let novoItem = document.createElement("li");
  novoItem.textContent = "Novo item criado pelo JavaScript";

  lista.appendChild(novoItem);
}

function removerItem() {
  let lista = document.getElementById("lista");

  if (lista.lastElementChild) {
    lista.removeChild(lista.lastElementChild);
  } else {
    alert("Não há itens para remover.");
  }
}

function validarFormulario(event) {
  event.preventDefault();

  
}