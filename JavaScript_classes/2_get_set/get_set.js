const button = {
  get tamanho(){
    return this._numero;
  },
  set tamanho(numero){
    this._numero = numero * 20
  }
}

console.log('get inicial', button.tamanho)
console.log('set', button.tamanho = 20)
console.log('get depois do set', button.tamanho)



console.log('***************')



const frutas = {
  lista: [],
  /**
   * @param {string} fruta
   */
  set nova(fruta) {
    this.lista.push(fruta);
  }
}
console.log('objeto fruta', frutas.lista)
console.log('set no método nova', frutas.nova = 'morango')
console.log('get no método nova', frutas.nova)



console.log('***************')



class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  
  get element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
}
const greenButton = new Button('Venda', 'green')
console.log('classe com get no método', greenButton)
console.log('classe com set no método', greenButton.element = ['ola'])
console.log('classe com get depois do set no método', greenButton)



console.log('***************')



