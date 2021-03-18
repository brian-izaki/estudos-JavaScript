const doc = fetch("./doc.txt");
console.log("fetch", doc);
doc
  .then((resolucao) => {
    console.log("******");
    console.log("fetch then", resolucao);
    console.log("****** headers");
    resolucao.headers.forEach(console.log)
    return resolucao.text();
  })
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerHTML = body;
    console.log("******");
    console.log("fetch arquivo .... ", body);
  });



const cep = fetch("https://viacep.com.br/ws/15970000/json");
cep
  .then((sucesso) => {
    console.log("******");
    console.log("cep ... ", sucesso);
    return sucesso.json();
  })
  .then((body) => {
    console.log("******");
    console.log("cep ... ", body);
  });



const imagem = fetch("./image.jpg");
imagem
  .then((response) => response.blob())
  .then((body) => {
    const blobUrl = URL.createObjectURL(body);
    console.log("******");
    console.log("blob body", body);
    console.log("blob url", blobUrl);
    const img = document.querySelector("img");
    img.src = blobUrl;
  });


  
const cloneRes = fetch("https://viacep.com.br/ws/15970000/json");
cloneRes.then((response) => {
  const clonado = response.clone();
  response.text().then((text) => {
    console.log("******");
    console.log("clone text", text);
  });
  clonado.json().then((json) => {
    console.log("******");
    console.log("clone json", json);
  });
});


