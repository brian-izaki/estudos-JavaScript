// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll(".menu ul li a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    links.forEach((link) => {
      link.classList.remove("ativo");
      console.log(link);
    });
    console.log(e.target);
    e.target.classList.add("ativo");
  });
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll("body *");
todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", (e) => {
    console.log(e.target);
  });
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", (e) => {
    e.target.remove();
  });
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
let font = 16;

window.addEventListener("keydown", (e) => {
  if (e.key === "t") {
    font++;
    document.body.style.fontSize = `${font}px`;
  }
});
