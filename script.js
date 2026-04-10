// pega o formulário e os campos pra usar depois
const meuForm = document.querySelector("#formulario-post");
const inputTitulo = document.querySelector("#titulo-input");
const inputTexto = document.querySelector("#conteudo-input");

// onde o post vai aparecer na tela
const lugarDoTitulo = document.querySelector("#renderizador-titulo");
const lugarDoTexto = document.querySelector("#renderizador-conteudo");

meuForm.addEventListener("submit", function (evento) {
  evento.preventDefault(); // não deixa a página dar refresh

  // monta o pacotinho de dados pra enviar
  const data = {
    title: inputTitulo.value,
    body: inputTexto.value,
    userId: 1,
  };

  // manda pra api
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((objetoVolta) => {
      // joga o que a api mandou de volta nos lugares certos
      lugarDoTitulo.innerHTML = objetoVolta.title;
      lugarDoTexto.innerHTML = objetoVolta.body;

      console.log("enviado!", objetoVolta);
      alert("Post criado com sucesso!");
    })
    .catch((erro) => {
      console.log("deu algum problema aqui:", erro);
    });
});
