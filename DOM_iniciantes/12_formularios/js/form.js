const contato = document.querySelector("#contato");
const texto = document.querySelector(".texto");
const checkeds = document.querySelectorAll("input[name='anime']")

console.log("form simplificado", document.forms[0]);
console.log("com querySelector", contato.elements);
console.log("valor do input", contato.elements.nome.value);

const dados = {}

function handleKeyUp(e) {
  const target = e.target;
  console.log('valor do input ...', target.value)
  console.log('valor do input ...', Object.getOwnPropertyNames(e))
  
  if (!target.checkValidity()) {
    target.classList.add("invalido");
    contato.nome.setCustomValidity("O nome é muito importante");
    target.nextElementSibling.innerText = target.validationMessage;
  }

  // escreve no span dentro do html o valor do input.
  texto.innerText = e.target.value;
  
  // armazena os valores do input em um objeto, as chaves são de acordo com o name do input
  dados[target.name] = target.value;
}

function selectOption(e) {
  document.body.style.backgroundColor = e.target.value;
}

function paraCheckBox(e) {
  console.log('ckeckbox', e.target.checked)
}

contato.addEventListener("keyup", handleKeyUp);
contato.addEventListener("change", handleKeyUp);
contato[3].addEventListener("change", selectOption)
checkeds.forEach(checked => {
  checked.addEventListener("change", paraCheckBox)
})

document.querySelector('button').addEventListener('click', () => console.log(dados))